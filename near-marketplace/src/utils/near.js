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
  // const near = await connect(
  //   Object.assign(
  //     { keyStore: new keyStores.BrowserLocalStorageKeyStore() },
  //     nearEnv
  //   )
  // );
  // connect to NEAR
  const nearConnection = await connect(connectionConfig);
  // console.log(nearConnection)
  // create wallet connection
  window.walletConnection = new WalletConnection(nearConnection, "mycontract.ozo_vehe.testnet");
  window.accountId = window.walletConnection.getAccountId();
  window.contract = new Contract(
    window.walletConnection.account(),
    nearEnv.contractName,
    {
      viewMethods: ["getProduct", "getProducts"],
      changeMethods: ["buyProduct", "setProduct"],
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
  // console.log("Login in near")
  return window.walletConnection.requestSignIn({
    contractId: nearEnv.contractName,
  });
}

export function logout() {
  window.walletConnection.signOut();
  window.location.reload();
}