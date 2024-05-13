import {environment, CONTRACT_NAME} from "./config";
import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import { formatNearAmount } from "near-api-js/lib/utils/format";

const nearEnv = environment("testnet");

export async function initializeContract() {
  const near = await connect(
    Object.assign(
      { keyStore: new keyStores.BrowserLocalStorageKeyStore() },
      nearEnv
    )
  );
  window.walletConnection = new WalletConnection(near, "mycontract.ozo_vehe.testnet");
  window.accountId = window.walletConnection.getAccountId();

  if(window.walletConnection.account()) {
    window.contract = new Contract(
      window.walletConnection.account(),
      CONTRACT_NAME,
      {
        viewMethods: ["getProduct", "getProducts", "getHighestBid", "getHighestBidder"],
        changeMethods: ["placeBid", "setProduct", "withdrawBid"],
      }
    );
  };
}

export async function accountBalance() {
  return formatNearAmount(
    (await window.walletConnection.account().getAccountBalance()).total,
    2
  );
}

export async function getAccountId() {
  return window.walletConnection.getAccountId();
}

export async function login() {
  console.log("Login in near")
  return window.walletConnection.requestSignIn({
    contractId: nearEnv.contractName,
    // successUrl: window.location.origin,
  });
}

export function logout() {
  window.walletConnection.signOut();
  window.location.reload();
}