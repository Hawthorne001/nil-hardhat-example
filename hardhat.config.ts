import "@nomicfoundation/hardhat-ethers"
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy"
import * as dotenv from "dotenv";
import {NilHardhatUserConfig} from "nil-hardhat-plugin"
import "nil-hardhat-plugin"

// Import tasks
import "./tasks/increment";
import {HardhatRuntimeEnvironment} from "hardhat/types";

dotenv.config();


const config: NilHardhatUserConfig = {
  solidity: "0.8.24",
  ignition: {
    requiredConfirmations: 1,
  },
  networks: {
    nil_cluster: {
      url: process.env.NIL_RPC_ENDPOINT,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    }
  },
  walletAddress: process.env.WALLET_ADDR
};
export default config;
