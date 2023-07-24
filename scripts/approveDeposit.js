// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/AstraDance.sol/AstraDance.json");

const tokenAddress = "0xf674ECAf9233081333ba84285c8b74f0e40e7Ff2"; // place your erc71 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC71RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xBEefDB19e5B0B50F8b0D403c89F381432035f932"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC71RootAddress);

    const tokenID = [1,2,3,4,5];

    const approveTx = await tokenContract.setApprovalForAll(fxERC71RootAddress, true);
    await approveTx.wait();

    console.log('Approval confirmed');

    for(let i = 0; i<5; i++){
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, tokenID[i], "0x6556");
    await depositTx.wait();
    }

    console.log("Tokens deposited");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });