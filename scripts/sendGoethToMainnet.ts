const { ethers } = require("ethers");
const GoerliBridgeContract = require("../syncer/contracts/goerliBridge.json");

// Config
const privKey =
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
const wallet = new ethers.Wallet(privKey);

// GOERLI
const web3providerGoerli = new ethers.providers.JsonRpcProvider(
  "http://127.0.0.1:8546/"
);

const GoerliBridgeContractInstance = new ethers.Contract(
  GoerliBridgeContract.address,
  GoerliBridgeContract.abi,
  web3providerGoerli
);

const wallet_goerli = wallet.connect(web3providerGoerli);

async function run() {
  await GoerliBridgeContractInstance.connect(wallet_goerli).depositTokens({
    value: ethers.utils.parseEther("2000").toString(),
  });
}

run();
