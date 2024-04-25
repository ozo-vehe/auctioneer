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
  duration: string;
  bidders: Array<string> = [];
  bids: Array<u128> = [];
  bid: u128;
  bidder: string;

  public static fromPayload(payload: Product): Product {
    const product = new Product();
    product.id = payload.id;
    product.name = payload.name;
    product.description = payload.description;
    product.image = payload.image;
    product.location = payload.location;
    product.price = payload.price;
    product.owner = context.sender;
    product.duration = payload.duration;

    return product;
  }
  public incrementSoldAmount(): void {
    this.sold = true;
  }
  public addBidders(bidder: string): void {
    this.bidders.push(bidder);
  }
  public addBids(bid: u128): void {
    this.bids.push(bid);
  }
  public withdrawBid(): void {
    if (this.owner != context.sender) {
      throw new Error("Only the owner can withdraw the bid");
    }
    /*
    `ContractPromiseBatch` is used here to create a transaction to transfer the money to the seller
    The amount of money to be used in the transaction is taken from `context.attachedDeposit`
    which is defined by `--depositYocto=${AMOUNT}` parameter during the invocation
    */
    ContractPromiseBatch.create(this.owner).transfer(this.bid);
    this.owner = this.bidder;
    this.sold = true;
  }
}

export const productsStorage = new PersistentUnorderedMap<string, Product>(
  "LISTED_PRODUCTS"
);
