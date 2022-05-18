import * as env from 'env-var';
import { generateRandomWalletKey } from '@/utils';

const factoryAddresses = {
  luaFactoryAddress: env.get('LUA_FACTORY_ADDRESS').default('0x0388c1e0f210abae597b7de712b9510c6c36c857').asString(),
  croFactoryAddress: env.get('CRO_FACTORY_ADDRESS').default('0x9DEB29c9a4c7A88a3C0257393b7f3335338D9A9D').asString(),
  zeusFactoryAddress: env.get('ZEUS_FACTORY_ADDRESS').default('0xbdda21dd8da31d5bee0c9bb886c044ebb9b8906a').asString(),
  sushiswapFactoryAddress: env.get('SUSHISWAP_FACTORY_ADDRESS').default('0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac').asString(),
  uniswapFactoryAddress: env.get('UNISWAP_FACTORY_ADDRESS').default('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f').asString(),
};

export const config = {
  setup: {
    ethereumRpcUrl: env.get('ETHEREUM_RPC_URL').default('http://localhost:8545').asString(),
    privateKey: env.get('PRIVATE_KEY').required().asString(),
    bundleExecutorAddress: env.get('BUNDLE_EXECUTOR_ADDRESS').required().asString(),
    flashbotsRelaySigningKey: env.get('FLASHBOTS_RELAY_SIGNING_KEY').default(generateRandomWalletKey()).asString(),
    minerRewardPercentage: env.get('MINER_REWARD_PERCENTAGE').default('80').asString(),
    healthCheckUrl: env.get('HEALTH_CHECK_URL').default('').asString(),
    factoryAddresses: [
      factoryAddresses.luaFactoryAddress,
      factoryAddresses.croFactoryAddress,
      factoryAddresses.zeusFactoryAddress,
      factoryAddresses.sushiswapFactoryAddress,
      factoryAddresses.uniswapFactoryAddress,
    ],
  },
  logger: {
    logLevel: env.get('LOG_LEVEL').default('info').asString(),
  },
};
