import { Product, productsStorage } from "./model";
import { context, u128 } from "near-sdk-as";

/**
 *
 * This function changes the state of data in the blockchain.
 * It is used to issue buy transactions when a product is purchased from a given seller (if the product is available)
 *
 * @param productId - an identifier of a product that is the subject of purchase
 */
export function placeBid(productId: string): void {
  const product = getProduct(productId);
  if (product == null) {
    throw new Error("product not found");
  }
  if (product.price.toString() > context.attachedDeposit.toString()) {
    throw new Error(
      "attached deposit should be greater than the product's price"
    );
  }
  // Add or update the bid
  if (product.bidders.includes(context.sender)) {
    const index = product.bidders.indexOf(context.sender);
    if (product.bids[index] >= context.attachedDeposit) {
      throw new Error("Bid amount should be higher than the current bid");
    }

    product.bids[index] = context.attachedDeposit; // Update the existing bid
  } else {
    product.addBidders(context.sender);
    product.addBids(context.attachedDeposit);
  }
  
  product.bidder = context.sender;
  product.price = context.attachedDeposit; // Update the price
  productsStorage.set(productId, product);
}

/**
 *
 * @param product - a product to be added to the blockchain
 */
export function setProduct(product: Product): void {
  let storedProduct = productsStorage.get(product.id);
  if (storedProduct !== null) {
    throw new Error(`a product with id=${product.id} already exists`);
  }
  productsStorage.set(product.id, Product.fromPayload(product));
}

/**
 *
 * A function that returns a single product for given owner and product id
 *
 * @param id - an identifier of a product to be returned
 * @returns a product for a given @param id
 */
export function getProduct(id: string): Product | null {
  return productsStorage.get(id);
}

/**
 *
 * A function that returns an array of products for all accounts
 *
 */
export function getProducts(): Array<Product> {
  return productsStorage.values();
}

/**
 *
 * A function to withdraw the highest bid.
 *
 * @returns an array of objects that represent a product
 */
export function withdrawBid(id: string): void {
  const product = getProduct(id);
  if (product == null) {
    throw new Error("Product not found");
  }
  const end = (product.created + (U64.parseInt(product.duration) * 60000));
  const now = U64.parseInt((context.blockTimestamp).toString().slice(0, 13))
  // const time = end - now;
  const hasEnded = now > end;

  if (hasEnded) {
    product.withdrawBid();
    productsStorage.set(product.id, product);
  } else {
    throw new Error(`The auction is still active`);
  }
}

/**
 *
 * A function to get all bids
 *
 * @param id - an identifier of a product to be returned
 */
export function getHighestBid(id: string): Array<u128> {
  const product = getProduct(id);
  if (product == null) {
    throw new Error("Product not found");
  }
  return product.bids;
}

/**
 *
 * A function to get the highest bidder
 *
 * @param id - an identifier of a product to be returned
 */
export function getBidders(id: string): Array<string> {
  const product = getProduct(id);
  if (product == null) {
    throw new Error("Product not found");
  }
  return product.bidders;
}
