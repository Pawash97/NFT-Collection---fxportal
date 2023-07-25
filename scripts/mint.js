// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const NFTContractJSON = require("../artifacts/contracts/AstraDance.sol/AstraDance.json");
require('dotenv').config()

const NFTAddress = "0x40b09C149f873C87f436610f813A116f39c02FA9";
const NFTABI = NFTContractJSON.abi;
const walletAddress = "0xBEefDB19e5B0B50F8b0D403c89F381432035f932"; 

async function main() {

    const NFT = await hre.ethers.getContractAt(NFTABI, NFTAddress);
  
    const tx = await NFT.mint(5);
    await tx.wait();

    console.log("You now have: " + await NFT.balanceOf(walletAddress) + " nfts");

    console.log("Prompt: ", await NFT._promptDescription());
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });