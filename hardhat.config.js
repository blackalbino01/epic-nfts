require("@nomiclabs/hardhat-waffle");

const ROPSTEN_PRIVATE_KEY = "849db332c416240a0c30d59468a7e9cdfe6bd1dae2f747afd42bbec19354e0f2";
const ALCHEMY_API = 'S58Ui7HqShKXXE7D2Mi83Ue9L4KH3jRu';

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};