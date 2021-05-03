const { ethers } = require("ethers");
const WGoethContract = require("../syncer/contracts/wGoeth.json");

// Config
const privKey =
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
const wallet = new ethers.Wallet(privKey);

// MAINNET
const web3providerMainnet = new ethers.providers.JsonRpcProvider(
  "http://127.0.0.1:8545/"
);

const WGoethContractInstance = new ethers.Contract(
  WGoethContract.address,
  WGoethContract.abi,
  web3providerMainnet
);

const wallet_eth = wallet.connect(web3providerMainnet);

async function run() {
  await WGoethContractInstance.connect(wallet_eth).burn(
    ethers.utils.parseEther("2000").toString()
  );
}

run();
