// import { Product, listedProducts } from "./model";
// import { context, ContractPromiseBatch, u128 } from "near-sdk-as";

// /**
//  *
//  * This function changes the state of data in the blockchain.
//  * It is used to issue buy transactions when a product is purchased from a given seller (if the product is available)
//  *
//  * @param productId - an identifier of a product that is the subject of purchase
//  */
// export function placeBid(productId: string): void {
//   const product = getProduct(productId);
//     if (product == null) {
//       throw new Error("product not found");
//     }
//     if (product.price.toString() > context.attachedDeposit.toString()) {
//       throw new Error(
//         "attached deposit should be greater than the product's price"
//       );
//     }
//     if (product.sold) {
//       throw new Error("product is already sold");
//     }
//     product.placeBid(context.attachedDeposit);
// }

// /**
//  *
//  * @param product - a product to be added to the blockchain
//  */
// export function setProduct(product: Product): void {
//   let storedProduct = listedProducts.get(product.id);
//   if (storedProduct !== null) {
//     throw new Error(`a product with id=${product.id} already exists`);
//   }
//   listedProducts.set(product.id, Product.fromPayload(product));
// }

// /**
//  *
//  * A function that returns a single product for given owner and product id
//  *
//  * @param id - an identifier of a product to be returned
//  * @returns a product for a given @param id
//  */
// export function getProduct(id: string): Product | null {
//   return listedProducts.get(id);
// }

// /**
//  *
//  * A function that returns an array of products for all accounts
//  *
//  * @returns an array of objects that represent a product
//  */
// export function getProducts(): Array<Product> {
//   return listedProducts.values();
// }

// /**
//  *
//  * A function to withdraw the highest bid.
//  *
//  * @returns an array of objects that represent a product
//  */

// export function withdrawBid(id: string): void {
//   const product = getProduct(id);
//   if (product == null) {
//     throw new Error("Product not found");
//   }
//   product.withdrawBid();
//   listedProducts.set(product.id, product);
// }

import { Product, productsStorage } from "./model";
import { context } from "near-sdk-as";

/**
 *
 * This function changes the state of data in the blockchain.
 * It is used to issue buy transactions when a product is purchased from a given seller (if the product is available)
 *
 * @param productId - an identifier of a product that is the subject of purchase
 */
export function placeBid(productId: string): void {
  const product = getProduct(productId);
  // const sender = context.sender;
  // const attachedDeposit = context.attachedDeposit;
  if (product == null) {
    throw new Error("product not found");
  }
  if (product.price.toString() != context.attachedDeposit.toString()) {
    throw new Error(
      "attached deposit should be greater than the product's price"
    );
  }
  if (product.sold) {
    throw new Error("product is already sold");
  }
  product.incrementSoldAmount();
  if(product.bids.indexOf(context.attachedDeposit) > -1) {
    const index = product.bids.indexOf(context.attachedDeposit);
    
    if(product.bids[index] >= context.attachedDeposit) {
      throw new Error("Bid amount should be higher than the current bid");
    }

    product.bids[index] = context.attachedDeposit;
  } else {
    product.addBidders(context.sender);
    product.addBids(context.attachedDeposit);
  }
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
  product.withdrawBid();
  productsStorage.set(product.id, product);
}
