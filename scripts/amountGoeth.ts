import ethers from "ethers";

// Config
const privKey =
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
const wallet = new ethers.Wallet(privKey);

// GOERLI
const web3providerGoerli = new ethers.providers.JsonRpcProvider(
  "http://127.0.0.1:8546/"
);

const wallet_goerli = wallet.connect(web3providerGoerli);

async function run() {
  let balance = await web3providerGoerli.getBalance(wallet_goerli.address);
  console.log("GoEth balance: ", balance.toString());
}

run();
