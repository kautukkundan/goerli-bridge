import ethers from "ethers";
let WGoethContract = require("../syncer/contracts/wGoeth.json");

// Config
let privKey =
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
let wallet = new ethers.Wallet(privKey);

// MAINNET
let web3providerMainnet = new ethers.providers.JsonRpcProvider(
  "http://127.0.0.1:8545/"
);

let WGoethContractInstance = new ethers.Contract(
  WGoethContract.address,
  WGoethContract.abi,
  web3providerMainnet
);

let wallet_eth = wallet.connect(web3providerMainnet);

async function run() {
  let balance = await WGoethContractInstance.connect(wallet_eth).balanceOf(
    wallet_eth.address
  );
  console.log("wGoEth balance: ", balance.toString());
}

run();
