require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_PRIVATE_KEY = "43b1fc78bd6255576da0fbe4dfee5a21708689e2fa98fccf7480515e32ee1f2e";
const ALCHEMY_API_KEY = "PO0mtRucuPimhgeDO1rJU_zaLfpLCMOZ"; 
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: "Y7JH7T2WIIFG9WES6N6CKS4W8I4D5MGBWR"
  }
};
