import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

export default {
  solidity: "0.7.0",
  networks: {
    local1: {
      url: `http://127.0.0.1:8545`,
      accounts: [
        `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`,
      ],
    },
    local2: {
      url: `http://127.0.0.1:8546`,
      accounts: [
        `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`,
      ],
    },
    typechain: {
      outDir: "typechain",
      target: "ethers-v5",
    },
  },
};
