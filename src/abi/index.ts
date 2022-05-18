import { Abi } from '@/types';

// https://www.quicknode.com/guides/solidity/what-is-an-abi

export const BUNDLE_EXECUTOR_ABI: Abi[] = [ {
  inputs: [ { internalType: 'address payable', name: '_to', type: 'address' },
    { internalType: 'uint256', name: '_value', type: 'uint256' }, { internalType: 'bytes', name: '_data', type: 'bytes' } ],
  name: 'call',
  outputs: [ { internalType: 'bytes', name: '', type: 'bytes' } ],
  stateMutability: 'payable',
  type: 'function',
}, {
  inputs: [ { internalType: 'address', name: '_executor', type: 'address' } ],
  stateMutability: 'payable',
  type: 'constructor',
}, {
  inputs: [ { internalType: 'uint256', name: '_wethAmountToFirstMarket', type: 'uint256' },
    { internalType: 'uint256', name: '_ethAmountToCoinbase', type: 'uint256' },
    { internalType: 'address[]', name: '_targets', type: 'address[]' },
    { internalType: 'bytes[]', name: '_payloads', type: 'bytes[]' } ],
  name: 'uniswapWeth',
  outputs: [],
  stateMutability: 'payable',
  type: 'function',
}, { stateMutability: 'payable', type: 'receive' } ];
