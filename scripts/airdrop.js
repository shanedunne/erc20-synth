const { ethers } = require("hardhat");
require('dotenv').config();

const contractJson = require("../artifacts/contracts/Synthesis.sol/Synthesis.json");

const tokenAddress = "0x40b8159b2B84da6B7f1f5Fc9Ba1BCE0FA1Ae54d7";

let myAddress = process.env.RINKEBY_PRIVATE_KEY;

let addresses = [
    "0xD403F0a642046CC5527cfef7965F72135ecd7280", // fara
    "0x931482f1a7fF0a6748Ac3eC9C0d8d9F5f9260585", //salo s
    "0x3dF9C4BEf799F3Ca035ef725BFFA6D925b7F314b", // michael b
    "0x0D8396E9425Dc8e701b07E7f1d21B7AB54F3bf52", //laurence m
    "0x5aA44Cf795B8468dfE1924Df235E25d4171E6a59", //stipe
    "0xD53c22cEf355ccc0e5F5A9fb1d49E2F3B7283b8A", //Will Comyns
    "0xA669d987c8F893Fd53106a5980cf98bdde80b154", //Djay
    "0xD4CE7BF9548faa57d2bA7ae0e343fAE478960aCb", //German
    "0x9d71E838F6886C70B389aceEB4bd5c47CB569f21", //MrJawnson
    "0xa59Eea48108fA8A1Ae46955DB34Af60cd6e273d7", //Anuar Kilgore
    "0xAeEc1d4f0a349a95A671c530850c994215935245", // sam chepal
    "0xF4DD295ADe887B7487e4354AB7c41213CaAbEd74", // hunter k
    "0x99248BDa760eC313e94e7182c53313CBD2899F6b", //Jasper
    "0x00Bcb8c7c343eB29BA9217123eDa47996cDDf021", // Tom T
    "0x3963C066E010618b7Bb2Aa7c32B88aAd1553EA92", // Jingbo
    "0xf62824e995fD204764f023168cbdc2bD920c4a4E", // Zhuolin Bill
    "0x843451f377DFa03983Fbe1c070e5732ed66bcCf6", // Kisso S
    "0x7Af595C3443a7c893Eb1B67a3aE3905DEb41a4C1", //Raymond 
    "0x8fb6DE8Dd683Cb0B370F0DAFfEd843Bf7355B831", // Rehan S
    "0x495690477f27df52618496D72D1D41e6A9d9b5E5", // Leonard
    "0x4ca5e9214C15b303550B1E6f5e3Eae8033725637", // shreshth
    "0x0933bd68e7788fa2e861C735F0DA787252883dcf", // Esteban
    "0xF1540a82d41dF3F060Ef1e51A9111Ad338cA96D6", // Brian P
    "0xe89b22f42DbD6786e57f979026aac7D8770179d1", // Theo L
    "0xb0537496c8591d14c323c06c77e00f3EBc34F31e", //Pongchaiwat P
    "0xEde91918A5cA1c9ec607006Cb7bb19B531f09Bfd", // bradley
    "0x97fe1A1f8DB02862c0E0e4f7BF7C190B02803b8E", //ravi
    "0x85D106FDA0F3B0EaAb5E2D3F8BC91D08aE410926" // Cameron L
];





async function main() {
    const provider = new ethers.providers.JsonRpcProvider(hre.network.config.url);

    const wallet = new ethers.Wallet(process.env.RINKEBY_PRIVATE_KEY, provider);

    const contractInstance = new ethers.Contract(tokenAddress, contractJson.abi, wallet);

    for(let i = 0; i < addresses.length; i++){
        await contractInstance.transfer(addresses[i], ethers.utils.parseEther("1000"));
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });