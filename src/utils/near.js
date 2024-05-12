import environment from "./config";
import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import { formatNearAmount } from "near-api-js/lib/utils/format";

const nearEnv = environment("testnet");

const connectionConfig = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://testnet.mynearwallet.com/",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://testnet.nearblocks.io",
};


export async function initializeContract() {
  const nearConnection = await connect(connectionConfig);
  window.walletConnection = new WalletConnection(nearConnection, "mycontract.ozo_vehe.testnet");
  window.accountId = window.walletConnection.getAccountId();
  console.log(`Account Id: ${window.accountId}`);
  window.contract = new Contract(
    window.walletConnection.account(),
    nearEnv.contractName,
    {
      viewMethods: ["getProduct", "getProducts", "getHighestBid", "getHighestBidder"],
      changeMethods: ["placeBid", "setProduct", "withdrawBid"],
    }
  );
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

export function login() {
  console.log("Login in near")
  return window.walletConnection.requestSignIn({
    contractId: nearEnv.contractName,
  });
}

export function logout() {
  window.walletConnection.signOut();
  window.location.reload();
}