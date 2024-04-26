import { PersistentMap, context } from "near-sdk-as";

// Define the Product class
export class Product {
  id: string;
  name: string;
  price: u64;
  sold: boolean;
  soldAmount: u64;
  bidders: string[];
  bids: u64[];

  constructor(id: string, name: string, price: u64) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.sold = false;
    this.soldAmount = 0;
    this.bidders = [];
    this.bids = [];
  }

  // Increment the sold amount
  incrementSoldAmount(): void {
    this.soldAmount += 1;
  }

  // Add a bidder
  addBidders(bidder: string): void {
    this.bidders.push(bidder);
  }

  // Add a bid
  addBids(bid: u64): void {
    this.bids.push(bid);
  }

  // Withdraw a bid
  withdrawBid(): void {
    const index = this.bidders.indexOf(context.sender);
    if (index !== -1) {
      this.bidders.splice(index, 1);
      this.bids.splice(index, 1);
    }
  }

  // Factory method to create a Product instance from a payload object
  static fromPayload(payload: ProductPayload): Product {
    return new Product(payload.id, payload.name, payload.price);
  }
}

// Define the ProductPayload interface
export interface ProductPayload {
  id: string;
  name: string;
  price: u64;
}

// Define the storage for products
export const productsStorage = new PersistentMap<string, Product>("p");

/**
 * This function changes the state of data in the blockchain.
 * It is used to issue buy transactions when a product is purchased from a given seller (if the product is available)
 *
 * @param productId - an identifier of a product that is the subject of purchase
 */
export function placeBid(productId: string): void {
  const product = getProduct(productId);

  if (product === null) {
    throw new Error("Product not found");
  }

  if (context.attachedDeposit < product.price) {
    throw new Error("Attached deposit should be greater than or equal to the product's price");
  }

  if (product.sold) {
    throw new Error("Product is already sold");
  }

  product.incrementSoldAmount();

  const existingBidIndex = product.bids.indexOf(context.attachedDeposit);
  if (existingBidIndex !== -1) {
    if (context.attachedDeposit <= product.bids[existingBidIndex]) {
      throw new Error("Bid amount should be higher than the current bid");
    }

    product.bids[existingBidIndex] = context.attachedDeposit;
  } else {
    product.addBidders(context.sender);
    product.addBids(context.attachedDeposit);
  }
}

/**
 * Adds a product to the blockchain.
 *
 * @param product - a product to be added to the blockchain
 */
export function setProduct(product: Product): void {
  const storedProduct = productsStorage.get(product.id);
  if (storedProduct !== null) {
    throw new Error(`A product with id=${product.id} already exists`);
  }
  productsStorage.set(product.id, Product.fromPayload(product));
}

/**
 * Retrieves a product by its ID.
 *
 * @param id - the identifier of the product to retrieve
 * @returns the product with the specified ID, or null if not found
 */
export function getProduct(id: string): Product | null {
  return productsStorage.get(id);
}

/**
 * Retrieves all products stored in the blockchain.
 *
 * @returns an array of products
 */
export function getProducts(): Product[] {
  return productsStorage.values();
}

/**
 * Withdraws the highest bid for a product.
 *
 * @param id - the identifier of the product
 */
export function withdrawBid(id: string): void {
  const product = getProduct(id);
  if (product === null) {
    throw new Error("Product not found");
  }
  product.withdrawBid();
  productsStorage.set(product.id, product);
}
