/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKoiToken, IKoiTokenInterface } from "../IKoiToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKoiToken__factory {
  static readonly abi = _abi;
  static createInterface(): IKoiTokenInterface {
    return new utils.Interface(_abi) as IKoiTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKoiToken {
    return new Contract(address, _abi, signerOrProvider) as IKoiToken;
  }
}
