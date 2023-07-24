// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/AstraDance.sol/AstraDance.json");
require('dotenv').config()

const tokenAddress = "0x1b7a747e7f2eA77BAB66841793C797b367307cea";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xBEefDB19e5B0B50F8b0D403c89F381432035f932"; 

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