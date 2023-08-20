const hre = require("hardhat");
const { ethers } = require('hardhat');
const LootNFTAddress = "0xDc5b8F3971F5c4B60FB13d39cE65Bea7Dee8aEA7";

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    
    const LootNFT = await hre.ethers.getContractAt("LootByRogue", LootNFTAddress);
    // nft mint
    console.log("Minting NFT");
    const mint = await LootNFT.safeMint(
        deployer.address,
        99578100142433,
        105,184,21,31,23,23,
        [19,25,10,19,18,14],
        [0,1,0,0],
        10,11,12,13,14,15,16,17,
        [1,2,3,4,5]
    );
    console.log("Minting NFT Successfuly");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
