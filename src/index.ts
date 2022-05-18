import { arbitrageSigningWallet, flashbotsRelaySigningWallet, logger, provider } from '@/utils';
import { Arbitrage } from './Arbitrage';
import { ArbitrageSetup } from '@/types';
import { BUNDLE_EXECUTOR_ABI } from '@/abi';
import { Contract } from 'ethers';
import { FlashbotsBundleProvider } from '@flashbots/ethers-provider-bundle';
import { UniswappyV2EthPair } from './UniswappyV2EthPair';
import { config } from '@/config';

export const main = async (): Promise<void> => {
  const { arbitrage, markets } = await init();
};

const init = async (): Promise<ArbitrageSetup> => {
  logger.info(`Searcher wallet address: ${await arbitrageSigningWallet.getAddress()}`);
  logger.info(`Flashbots Relay Signing Wallet Address: ${await flashbotsRelaySigningWallet.getAddress()}`);

  const flashbotsProvider: FlashbotsBundleProvider =
    await FlashbotsBundleProvider.create(provider, flashbotsRelaySigningWallet);

  const arbitrage: Arbitrage = new Arbitrage(
    arbitrageSigningWallet,
    flashbotsProvider,
    new Contract(config.setup.bundleExecutorAddress, BUNDLE_EXECUTOR_ABI, provider),
  );

  const markets =
    await UniswappyV2EthPair.getUniswapMarketsByToken(provider, config.setup.factoryAddresses);

  return { arbitrage, markets };
};

