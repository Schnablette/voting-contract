// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");

async function main() {
  const [deployer, addr1, addr2, addr3, addr4, addr5,] = await hre.ethers.getSigners()

  const proposals = [
    ethers.utils.formatBytes32String("Become a starship ranger"),
    ethers.utils.formatBytes32String("Don't become a starship ranger"),
  ];

  const Ballot = await hre.ethers.getContractFactory("ModifiedBallot");
  const ballot = await Ballot.deploy(proposals);

  await ballot.deployed();

  console.log("Ballot Deployed to: ", ballot.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
