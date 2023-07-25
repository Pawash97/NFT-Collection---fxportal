# ERC721 Goerli to Mumbai Bridge Using fxPortal
This repository contains a solidity file for transfering NFTs over FXPortal Bridge from Goerli to Mumbai Testnet. Hardhat Scripts are used for deploy, mint, approve and deposit the NFTs over from Goerli to Mumbai.

## Functions
### `mint`
- A hardhar script is used for minting NFTs. In this project The NFTs are minted all at once.

### `approveDeposit`
- This hardhat script is used to approve the transfer of tokens and Deposit them on Mumbai Testnet.

### `getBalance`
- This script is used to return the balance of the wallet address specified.

### `_promptDescription`
- This function returns the prompt used to generate the images.

## Steps

### Install
`npm i` -- Install the dependencies

### Compile
`npx hardhat compile` 

This will compile your contract and generate the json files.

### Deploy on Goerli Testnet

Make sure hardhat.config.js contains url and private key for deployment.

`npx hardhat run scripts/deploy.js --network goerli`

This script deploys our contract on ethereum goerli testnet and generates the contract address.
We copy the contract address.

### Verify
`npx hardhat verify your_contract_address --network goerli`

This script will help you to verify and publish your contract on etherscan goerli testnet (not necessary).

### Mint NFTs on Goerli Testnet
`Note: `

- The contract address and wallet address must be provided to mint.js script.
 
`npx hardhat run scripts/mint.js --network goerli`

This scripts mints the NFTs to your wallet address.

### Approve and Deposit To Mumbai Testnet

`Note:`

- The contract address and wallet address must be provided to approveDeposit.js script.
- fxERC71RootAddress mustbe provided.
  
`npx hardhat run scripts/approveDeposit.js --network goerli`

- This Script approves and bridges our NFTs from goerli to Mumbai testnet.

### getBalance of Mumbai Testnet

`Note:`

- The contract address of NFTs deploymnet and wallet address must be provided to getBalance.js script.

`npx hardhat run scripts/getBalance.js --network mumbai`

- This script fetches the balance of our wallet from mumbai testnet and display on screen.



## Authors
Pawash Kumar Singh 
pawash97@gmail.com


## Video Walkthrough
https://www.loom.com/share/918e40838d434ba0a15e202f722802ce?sid=a461d414-cd55-4bfe-a721-785d9cb68ee3
