import * as dotenv from 'dotenv';

import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_URL_MCH = process.env.API_URL_MCH;
const API_URL_MUMBAI = process.env.API_URL_MUMBAI;
const API_URL_SHIBUYA = process.env.API_URL_SHIBUYA;
const API_URL_SEPOLIA = process.env.API_URL_SEPOLIA;
const API_KEY_MUMBAI = process.env.API_KEY_MUMBAI;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          viaIR: true,
        },
      },
    ],
  },
  defaultNetwork: "mch",
  networks: {
    mch: {
      url:API_URL_MCH,
      chainId:420,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    shibuya: {
      url: API_URL_SHIBUYA,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    mumbai:{
      url: API_URL_MUMBAI,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  },
  etherscan: {  // copy the Etherscan object from the verify Contracts secion on Dashboard 
    apiKey: {
      mch: 'abc',
      polygonMumbai: API_KEY_MUMBAI ? API_KEY_MUMBAI : ''
    },
    customChains: [
      {
        network: 'mch',
        chainId: 420,
        urls: {
          // Blockscout
          apiURL: 'https://explorer.oasys.sand.mchdfgh.xyz/api',
          browserURL: 'https://explorer.oasys.sand.mchdfgh.xyz'
        }
       },
       {
        network: "shibuya",
        chainId: 81,
        urls: {
          apiURL: "https://blockscout.com/shibuya/api",
          browserURL: "https://blockscout.com/shibuya"
        }
      }
    ],
  },
};

