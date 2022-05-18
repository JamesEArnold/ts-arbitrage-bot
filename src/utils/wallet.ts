import { logger, logs } from '@/utils/logger';
import { Wallet } from 'ethers';
import { config } from '@/config';

export const arbitrageSigningWallet = new Wallet(config.setup.privateKey);
export const flashbotsRelaySigningWallet = new Wallet(config.setup.flashbotsRelaySigningKey);

export const generateRandomWalletKey = (): string => {
  logger.warn(logs.warn.generateRandomWallet);
  return Wallet.createRandom().privateKey;
};
