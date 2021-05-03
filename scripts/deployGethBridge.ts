import ethers from "hardhat";

async function main() {
  // deploy goerli bridge
  const GoerliBridge = await ethers.getContractFactory("GoerliBridge");
  const goerliBridge = await GoerliBridge.deploy();
  await goerliBridge.deployed();
  console.log("GoerliBridge deployed to:", goerliBridge.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
