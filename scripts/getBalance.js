// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const NFTContractJSON = require("../artifacts/contracts/AstraDance.sol/AstraDance.json");

const NFTAddress = "0x3Ad884eDf99dAA562e3cBDE1591a47d8f31d34F0"; // place your erc71 contract address here
const NFTABI = NFTContractJSON.abi;
const walletAddress = "0xBEefDB19e5B0B50F8b0D403c89F381432035f932"; // place your public address for your wallet here

async function main() {

    const NFT = await hre.ethers.getContractAt(NFTABI, NFTAddress);

    console.log("Available Balance of " + walletAddress + " : " + await NFT.balanceOf(walletAddress) + " NFTs");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });