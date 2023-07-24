// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/AstraDance.sol/AstraDance.json");

const tokenAddress = "0xA8c2EC94388bc766E7c994CA50530a2e02974Cc9"; // place your erc71 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC71RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x516915709B29b673e02fCb4DC0234DA83B832D36"; // place your public address for your wallet here

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