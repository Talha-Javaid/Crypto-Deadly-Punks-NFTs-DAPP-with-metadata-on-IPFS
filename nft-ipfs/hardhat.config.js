require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.HTTP_URL}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

// 0xEf613A58d59572b29F7192A4860001b1CB394706
