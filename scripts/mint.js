// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/AstraDance.sol/AstraDance.json");
require('dotenv').config()

const tokenAddress = "0xA8c2EC94388bc766E7c994CA50530a2e02974Cc9";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x516915709B29b673e02fCb4DC0234DA83B832D36"; 

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  
    const tx = await token.mint(5);
    await tx.wait();

    console.log("You now have: " + await token.balanceOf(walletAddress) + "nfts");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });