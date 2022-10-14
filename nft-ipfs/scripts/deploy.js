const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL =
    "https://gateway.pinata.cloud/ipfs/QmUzKNevPeui8xU4nLor5XL7tcjzfYhuhqQZoNQUeSUYjJ/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  const CryptoDeadlyPunks = await ethers.getContractFactory(
    "CryptoDeadlyPunks"
  );

  // deploy the contract
  const cryptoDeadlyPunks = await CryptoDeadlyPunks.deploy(metadataURL);

  await cryptoDeadlyPunks.deployed();

  // print the address of the deployed contract
  console.log("CryptoDeadlyPunks Contract Address:", cryptoDeadlyPunks.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
