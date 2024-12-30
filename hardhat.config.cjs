require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.26",
  networks: {
    opbnb: {
      url: "https://opbnb-mainnet-rpc.bnbchain.org",
      accounts: ['af7eefa696da7049974756a31d81b2437a9b27aecb4494cb1d5f90c6db752215']
    },
    opbnbTestnet: {
      url: "https://opbnb-testnet-rpc.bnbchain.org",
      accounts: ['af7eefa696da7049974756a31d81b2437a9b27aecb4494cb1d5f90c6db752215']
    }
  }
};