const hre = require("hardhat");

async function main() {
  const [owner1,owner2,owner3,owner4] = await hre.ethers.getSigners();
  const Leadguitars = await hre.ethers.getContractFactory("Leadguitars");
  const leadguitars = await Leadguitars.connect(owner1).deploy("Lespaul","LPT");

  await leadguitars.deployed();


  console.log(
    `contract deployed to ${leadguitars.address}`
  );
  const nft = await leadguitars.mint(10,"https://ipfs.io/ipfs/QmYUyqUNeachW8CxqacBSvXWS6n3M1353hNoKJrfWq1Wgx");
  console.log(nft);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});