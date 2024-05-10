import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createProduct(product) {
  product.id = uuid4();
  product.price = parseNearAmount(product.price + "");
  return window.contract.setProduct({ product });
}

export function getProducts() {
  return window.contract.getProducts();
}

export async function placeBid({ id, price }) {
  console.log("Placing bid on marketplace.js...")
  // console.log(window.contract)
  const nearPrice = parseNearAmount(price + "");
  // console.log(nearPrice)
  await window.contract.placeBid({ productId: id }, GAS, nearPrice);
}

export async function withdrawBid({ id }) {
  await window.contract.withdrawBid({ id }, GAS);
  console.log("Withdraw bid...")
}

export async function getProductBidders({ id }) {
  return window.contract.getBidders({ id });
}

export async function getProductBids({ id }) {
  return window.contract.getBids({ id });
}