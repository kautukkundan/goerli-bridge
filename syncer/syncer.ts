import ethers from "ethers";
let GoerliBridgeContract = require("./contracts/goerliBridge.json");
let WGoethContract = require("./contracts/wGoeth.json");

// Config
let privKey =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
let wallet = new ethers.Wallet(privKey);

// GOERLI
let web3providerGoerli = new ethers.providers.JsonRpcProvider(
  "http://127.0.0.1:8546/"
);

let wallet_goerli = wallet.connect(web3providerGoerli);

let GoerliBridgeContractInstance = new ethers.Contract(
  GoerliBridgeContract.address,
  GoerliBridgeContract.abi,
  web3providerGoerli
);

// MAINNET
let web3providerMainnet = new ethers.providers.JsonRpcProvider(
  "http://127.0.0.1:8545/"
);

let wallet_eth = wallet.connect(web3providerMainnet);

let WGoethContractInstance = new ethers.Contract(
  WGoethContract.address,
  WGoethContract.abi,
  web3providerMainnet
);

// EVENTS

GoerliBridgeContractInstance.on("DepositGoeth", async (address, value) => {
  console.log("deposit", address, value.toString());
  WGoethContractInstance.connect(wallet_eth).mint(address, value);
});

WGoethContractInstance.on("BurnTokens", async (address, value) => {
  GoerliBridgeContractInstance.connect(wallet_goerli).releaseTokens(
    address,
    value
  );
  console.log("burn", address, value.toString());
});
