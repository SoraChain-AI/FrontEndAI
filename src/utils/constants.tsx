export const chainContractAddress =
  "0x5FbDB2315678afecb367f032d93F642f64180aa3"; //local smart contract address
export const blockChainServerUrl = "http://127.0.0.1:8545"; //local server using anvil
// export const contractABI = [
//   { type: "constructor", inputs: [], stateMutability: "nonpayable" },
//   {
//     type: "function",
//     name: "registerSubNetOwner",
//     inputs: [],
//     outputs: [],
//     stateMutability: "payable",
//   },
//   {
//     type: "function",
//     name: "setStackingAmount",
//     inputs: [{ name: "value", type: "uint256", internalType: "uint256" }],
//     outputs: [],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "event",
//     name: "subNetRegisterd",
//     inputs: [
//       {
//         name: "subnetOwner",
//         type: "address",
//         indexed: false,
//         internalType: "address",
//       },
//       {
//         name: "subnetID",
//         type: "uint256",
//         indexed: false,
//         internalType: "uint256",
//       },
//     ],
//     anonymous: false,
//   },
// ];
export const contractABI = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "AGGREGATOR_STAKE",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "CREATOR_STAKE",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TRAINER_STAKE",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "aggregateAndValidate",
    inputs: [{ name: "taskId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAvailableTasks",
    inputs: [],
    outputs: [
      { name: "", type: "uint256[]", internalType: "uint256[]" },
      { name: "", type: "string[]", internalType: "string[]" },
      { name: "", type: "bool[]", internalType: "bool[]" },
      { name: "", type: "address[]", internalType: "address[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getLastModelUpdate",
    inputs: [{ name: "trainer", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct TrainerNode.ModelRecord",
        components: [
          { name: "taskId", type: "uint256", internalType: "uint256" },
          { name: "ipfsHash", type: "string", internalType: "string" },
          { name: "timestamp", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getLastTask",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct BaseTask.TaskSummary",
        components: [
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "description", type: "string", internalType: "string" },
          { name: "isActive", type: "bool", internalType: "bool" },
          { name: "assignedTo", type: "address", internalType: "address" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getModelUpdatesByHash",
    inputs: [
      { name: "trainer", type: "address", internalType: "address" },
      { name: "ipfsHash", type: "string", internalType: "string" },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct TrainerNode.ModelRecord[]",
        components: [
          { name: "taskId", type: "uint256", internalType: "uint256" },
          { name: "ipfsHash", type: "string", internalType: "string" },
          { name: "timestamp", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getModelUpdatesByTimestamp",
    inputs: [
      { name: "trainer", type: "address", internalType: "address" },
      { name: "timestamp", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct TrainerNode.ModelRecord[]",
        components: [
          { name: "taskId", type: "uint256", internalType: "uint256" },
          { name: "ipfsHash", type: "string", internalType: "string" },
          { name: "timestamp", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMyRole",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTrainerModels",
    inputs: [{ name: "trainer", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct TrainerNode.ModelRecord[]",
        components: [
          { name: "taskId", type: "uint256", internalType: "uint256" },
          { name: "ipfsHash", type: "string", internalType: "string" },
          { name: "timestamp", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTrainerModelsPaginated",
    inputs: [
      { name: "trainer", type: "address", internalType: "address" },
      { name: "start", type: "uint256", internalType: "uint256" },
      { name: "count", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct TrainerNode.ModelRecord[]",
        components: [
          { name: "taskId", type: "uint256", internalType: "uint256" },
          { name: "ipfsHash", type: "string", internalType: "string" },
          { name: "timestamp", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isTaskCreator",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "roles",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [
      { name: "", type: "uint8", internalType: "enum RoleBasedAccess.Role" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "stakeAsAggregrator",
    inputs: [{ name: "taskID", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "stakeCreatorTokens",
    inputs: [{ name: "reward", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "stakeTokens",
    inputs: [
      { name: "taskID", type: "uint256", internalType: "uint256" },
      {
        name: "role",
        type: "uint8",
        internalType: "enum RoleBasedAccess.Role",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "taskCounter",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tasks",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "id", type: "uint256", internalType: "uint256" },
      { name: "creator", type: "address", internalType: "address" },
      { name: "reward", type: "uint256", internalType: "uint256" },
      { name: "totalstaked", type: "uint256", internalType: "uint256" },
      { name: "isActive", type: "bool", internalType: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "trainerModels",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      { name: "taskId", type: "uint256", internalType: "uint256" },
      { name: "ipfsHash", type: "string", internalType: "string" },
      { name: "timestamp", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "trainerNodeContract",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract TrainerNode" },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "AggregatedModelStored",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "ipfsHash",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AggregrationComplete",
    inputs: [
      {
        name: "taskID",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "aggregrationModel",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModelSubmitted",
    inputs: [
      {
        name: "taskID",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "trainer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "modelUpdates",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModelUpdateStored",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "trainer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "ipfsHash",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RewardDistributed",
    inputs: [
      {
        name: "taskID",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "trainer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "reward",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaskCreated",
    inputs: [
      {
        name: "taskID",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "rewards",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaskCreated",
    inputs: [
      { name: "id", type: "uint256", indexed: false, internalType: "uint256" },
      {
        name: "details",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "creator",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
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
export const accountaddress2 = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
