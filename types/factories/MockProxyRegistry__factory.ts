/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockProxyRegistry,
  MockProxyRegistryInterface,
} from "../MockProxyRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "proxies",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_proxyForAddress",
        type: "address",
      },
    ],
    name: "setProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002161001c610026565b61002a565b61007a565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103e2806100896000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063a9d4630c11610050578063a9d4630c14610094578063c4552791146100a7578063f2fde38b146100ba57610067565b8063715018a61461006c5780638da5cb5b14610076575b600080fd5b6100746100cd565b005b61007e610121565b60405161008b9190610306565b60405180910390f35b6100746100a23660046102d4565b610130565b61007e6100b53660046102b3565b6101aa565b6100746100c83660046102b3565b6101c5565b6100d5610236565b6001600160a01b03166100e6610121565b6001600160a01b0316146101155760405162461bcd60e51b815260040161010c90610377565b60405180910390fd5b61011f600061023a565b565b6000546001600160a01b031690565b610138610236565b6001600160a01b0316610149610121565b6001600160a01b03161461016f5760405162461bcd60e51b815260040161010c90610377565b6001600160a01b039182166000908152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b6001602052600090815260409020546001600160a01b031681565b6101cd610236565b6001600160a01b03166101de610121565b6001600160a01b0316146102045760405162461bcd60e51b815260040161010c90610377565b6001600160a01b03811661022a5760405162461bcd60e51b815260040161010c9061031a565b6102338161023a565b50565b3390565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146102ae57600080fd5b919050565b6000602082840312156102c4578081fd5b6102cd82610297565b9392505050565b600080604083850312156102e6578081fd5b6102ef83610297565b91506102fd60208401610297565b90509250929050565b6001600160a01b0391909116815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea2646970667358221220b64479be390f87453616d679dddca0c8e67d6236653aa55453bf67d37be0d48a64736f6c63430008000033";

export class MockProxyRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockProxyRegistry> {
    return super.deploy(overrides || {}) as Promise<MockProxyRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockProxyRegistry {
    return super.attach(address) as MockProxyRegistry;
  }
  connect(signer: Signer): MockProxyRegistry__factory {
    return super.connect(signer) as MockProxyRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockProxyRegistryInterface {
    return new utils.Interface(_abi) as MockProxyRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockProxyRegistry {
    return new Contract(address, _abi, signerOrProvider) as MockProxyRegistry;
  }
}