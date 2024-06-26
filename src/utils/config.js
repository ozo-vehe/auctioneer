export const CONTRACT_NAME =
  process.env.CONTRACT_NAME || "mycontract.ozo_vehe.testnet"; // line 1

export function environment(env) {
  switch (env) {
    case "mainnet": // line 5
      return {
        networkId: "mainnet",
        nodeUrl: "https://rpc.mainnet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.near.org",
        helperUrl: "https://helper.mainnet.near.org",
        explorerUrl: "https://explorer.mainnet.near.org",
      };
    case "testnet": // line 14
      return {
        networkId: "testnet",
        nodeUrl: "https://rpc.testnet.near.org",
        // contractName: CONTRACT_NAME,
        // walletUrl: "https://wallet.testnet.near.org",
        // helperUrl: "https://helper.testnet.near.org",
        // explorerUrl: "https://explorer.testnet.near.org",
        walletUrl: "https://testnet.mynearwallet.com/",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://testnet.nearblocks.io",
      };
    default:
      throw Error(`Unknown environment '${env}'.`);
  }
}
