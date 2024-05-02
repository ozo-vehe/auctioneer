import { PersistentUnorderedMap, ContractPromiseBatch, u128, context } from "near-sdk-as";

@nearBindgen
export class Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: u128;
  owner: string;
  sold: bool = false;
  created: u64;  // Timestamp when the auction ends
  bidders: Array<string> = [];
  duration: string;
  bids: Array<u128> =  []
  bid: u128;
  bidder: string;

  public static fromPayload(payload: Product): Product {
    const product = new Product();
    product.id = payload.id;
    product.name = payload.name;
    product.description = payload.description;
    product.image = payload.image;
    product.price = payload.price;
    product.owner = context.sender;
    product.duration = payload.duration;
    product.created = payload.created;
    return product;
  }

  public addBidders(bidder: string): void {
    this.bidders.push(bidder);
  }
  public addBids(bid: u128): void {
    if(bid <= this.bid) {
      throw new Error("Bid amount is higher than the current bid");
    }
    this.bid = bid;
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
    // this.sold = true;
  }
}

export const productsStorage = new PersistentUnorderedMap<string, Product>("LISTED_PRODUCTS");
