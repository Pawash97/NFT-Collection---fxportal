// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract AstraDance is ERC721A {
    
    address public owner;

    string baseuri = "https://gateway.pinata.cloud/ipfs/QmYGipkvanfUu6JAxfTzTD38RSSgHk4pox6bCqaeoTNXmv/";

    string prompt = "An Astronaut dance party on the surface of Mars, Digital illustration!";
    
    constructor() ERC721A ("AstraDance", "ASD") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner , "Only Owner can mint NFTs");
        _;
    }

    function mint(uint256 amount) external payable onlyOwner {
        require(amount <= 5 , "Cannot Mint more than 5 NFTs");

        _mint(msg.sender, amount);
    }

    function _startTokenId() internal pure override returns (uint256) {
        return 1;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseuri;
    }

    function _promptDescription() external view returns(string memory) {
        return prompt;
    }
   
}