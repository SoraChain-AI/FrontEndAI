export const chainContractAddress =
  "0x5FbDB2315678afecb367f032d93F642f64180aa3"; //local smart contract address
export const blockChainServerUrl = "http://127.0.0.1:8545"; //local server using anvil
export const contractABI = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "registerSubNetOwner",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "setStackingAmount",
    inputs: [{ name: "value", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "subNetRegisterd",
    inputs: [
      {
        name: "subnetOwner",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "subnetID",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
];
export const registerServerFunction = "registerSubNetOwner()";
export const accountaddress1 = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
