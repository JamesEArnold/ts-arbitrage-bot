import { config } from '@/config';
import { providers } from 'ethers';

export const provider = new providers.StaticJsonRpcProvider(config.setup.ethereumRpcUrl);
