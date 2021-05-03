const { ethers } = require("hardhat");

async function main() {
  // deploy wrapped Goeth
  const WGoethToken = await ethers.getContractFactory("WGoethToken");
  const wGoethToken = await WGoethToken.deploy();
  await wGoethToken.deployed();
  console.log("WrappedGoethToken deployed to:", wGoethToken.address);

  //   await wGoethToken.mint(
  //     "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
  //     hre.ethers.BigNumber.from("1000000000000000000000000")
  //   );
  //   console.log("Minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
