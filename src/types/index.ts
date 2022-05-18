import { Arbitrage } from '@/utils/Arbitrage';

export type ArbitrageSetup = {
  arbitrage: Arbitrage,
  markets: any,
};

type AbiInputOutput = {
  internalType: string,
  name: string,
  type: string,
}

export interface Abi {
  stateMutability: string,
  type: string,
  inputs?: AbiInputOutput[],
  name?: string,
  outputs?: AbiInputOutput[],
}
