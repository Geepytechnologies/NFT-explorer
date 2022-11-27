const hre = require("hardhat");

async function main() {
  const [owner1,owner2,owner3,owner4] = await hre.ethers.getSigners();
  const Erc1155 = await hre.ethers.getContractFactory("Erc1155");
  const erc1155 = await Erc1155.deploy();

  await erc1155.deployed();


  console.log(
    `contract deployed to ${erc1155.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});