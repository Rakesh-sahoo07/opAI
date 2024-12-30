require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.26",
  networks: {
    opbnb: {
      url: "https://opbnb-mainnet-rpc.bnbchain.org",
      accounts: [process.env.PRIVATE_KEY]
    },
    opbnbTestnet: {
      url: "https://opbnb-testnet-rpc.bnbchain.org",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};