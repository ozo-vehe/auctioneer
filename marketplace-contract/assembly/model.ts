// import {
//   PersistentUnorderedMap,
//   u128,
//   context,
//   ContractPromiseBatch,
// } from "near-sdk-as";

// @nearBindgen
// export class Product {
//   id: string;
//   name: string;
//   description: string;
//   image: string;
//   price: u128;
//   bidders: Array<string> = [];
//   bids: Array<Object> = [{ bidder: String, bid: u128 }];
//   bid: u128;
//   bidder: string;
//   duration: u64;
//   owner: string;
//   sold: bool;

//   public static fromPayload(payload: Product): Product {
//     const product = new Product();
//     product.id = payload.id;
//     product.name = payload.name;
//     product.description = payload.description;
//     product.image = payload.image;
//     product.price = payload.price;
//     product.owner = context.sender;
//     product.duration = payload.duration;
//     product.sold = payload.sold;
//     product.bid = payload.bid;
//     product.bidder = payload.bidder;
//     product.bidders = payload.bidders;
//     product.bids = payload.bids;
//     return product;
//   }

//   // Change the current bid amount
//   public placeBid(bid: u128): void {
//     // Error checks
//     if (this.sold) {
//       throw new Error("Product is already sold");
//     }
//     if (this.owner == context.sender) {
//       throw new Error("Seller cannot bid on their own product");
//     }
//     if (this.duration < context.blockTimestamp) {
//       throw new Error("Auction has ended");
//     }

//     if (this.price < bid) {
//       if (!this.bidders.includes(context.sender)) {
//         this.bidders.push(context.sender);
//       }
//       // const bidderOject = { bidder: context.sender, bid: bid };
//       this.bid = bid;
//       this.bidder = context.sender;
//     } else {
//       throw new Error("Bid amount is lower than the current bid");
//     }
//   }

//   // Function to withdraws winning bids
//   public withdrawBid(): void {
//     if (this.owner != context.sender) {
//       throw new Error("Only the owner can withdraw the bid");
//     }
//     /*
//     `ContractPromiseBatch` is used here to create a transaction to transfer the money to the seller
//     The amount of money to be used in the transaction is taken from `context.attachedDeposit`
//     which is defined by `--depositYocto=${AMOUNT}` parameter during the invocation
//     */
//     ContractPromiseBatch.create(this.owner).transfer(this.bid);
//     this.owner = this.bidder;
//     this.sold = true;
//   }
// }

// export const listedProducts = new PersistentUnorderedMap<string, Product>(
//   "LISTED_PRODUCTS"
// );


import { PersistentUnorderedMap, ContractPromiseBatch, u128, context } from "near-sdk-as";

@nearBindgen
export class Product {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  price: u128;
  owner: string;
  sold: bool = false;
  endTime: u64;  // Timestamp when the auction ends
  bidders: PersistentUnorderedMap<string, u128> = new PersistentUnorderedMap("bidders");

  public static fromPayload(payload: Product): Product {
    const product = new Product();
    product.id = payload.id;
    product.name = payload.name;
    product.description = payload.description;
    product.image = payload.image;
    product.location = payload.location;
    product.price = payload.price;
    product.owner = context.sender;
    product.endTime = context.blockTimestamp + I64.parseInt(payload.duration);
    return product;
  }

  public addBid(bidder: string, bid: u128): void {
    if (context.blockTimestamp > this.endTime) {
      throw new Error("Auction has already ended");
    }
    if (bid <= this.price || (this.bidders.contains(bidder) && bid <= this.bidders.getSome(bidder))) {
      throw new Error("Bid amount must be higher than the current or previous bid");
    }
    let previousBid = this.bidders.contains(bidder) ? this.bidders.getSome(bidder) : u128.Zero;
    ContractPromiseBatch.create(bidder).transfer(previousBid);  // Refund previous bid if any
    this.bidders.set(bidder, bid);
    if (bid > this.price) {
      this.price = bid;
    }
  }

  public finalizeSale(): void {
    if (context.sender != this.owner) {
      throw new Error("Only the owner can finalize the sale");
    }
    if (!this.sold && context.blockTimestamp > this.endTime) {
      let highestBidder = this.findHighestBidder();
      ContractPromiseBatch.create(this.owner).transfer(this.price);  // Transfer highest bid to the owner
      this.owner = highestBidder;
      this.sold = true;
    } else {
      throw new Error("Auction cannot be finalized yet");
    }
  }

  private findHighestBidder(): string {
    let highestBidder: string = "";
    let highestBid: u128 = u128.Zero;
    for (let i = 0; i < this.bidders.length; i++) {
      let bidder = this.bidders.keys[i];
      let bid = this.bidders.getSome(bidder);
      if (u128.gt(bid, highestBid)) {
        highestBid = bid;
        highestBidder = bidder;
      }
    }
    return highestBidder;
  }
}

export const productsStorage = new PersistentUnorderedMap<string, Product>("LISTED_PRODUCTS");
