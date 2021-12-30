require("@nomiclabs/hardhat-waffle");

const ROPSTEN_PRIVATE_KEY = "";
const ALCHEMY_API = '';

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
