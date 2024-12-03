import { useState } from "react";
import { useContext, useEffect } from "react";
import Web3, {
  Contract,
  HttpProvider,
  Web3BaseProvider,
  Web3BaseWallet,
} from "web3";
import {
  blockChainServerUrl,
  chainContractAddress,
  contractABI,
  registerServerFunction,
  accountaddress1,
} from "../../utils/constants";
import { AccountContext } from "../../Contexts/AccountContext";
import { TaskSummery } from "../types/Tasks";

export const useWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [method, setMethod] = useState("");

  const [provider, setProvider] = useState<Web3BaseProvider | null>(null);
  const context = useContext(AccountContext);
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
        window.ethereum.on("accountsChanged", function (accounts) {
          setAddress(accounts[0]);
          context.setAccount(accounts[0]);
        });
        setIsConnected(true);
        console.log("connectedconnectWallet " + accounts[0]);
        return { success: true, address };
      } catch (error) {
        return { success: false, error };
      }
    }
    return { success: false, error: "MetaMask not installed" };
  };

  const initWeb3 = async (role: string) => {
    const providerUrl = blockChainServerUrl;
    const web3Instance = await new Web3(
      new Web3.providers.HttpProvider(providerUrl)
    );
    const contractInstance = new web3Instance.eth.Contract(
      contractABI,
      chainContractAddress
    );
    if (Object.is(contractInstance, null)) {
    } else {
      // role == "TaskCreator" ? contractInstance.methods.stakeCreaterToken(rewardAmount) : contractInstance.methods.stakeToken(taskID, role);
      // setMethod(contractInstance.methods);
    }
  };

  // const getRoleFunction(role)

  const sendCreatorTransaction = async (
    rewardAmount: string,
    stakeToken: string
  ) => {
    const connection = await connectWallet();
    if (!connection.success) return { success: false, error: connection.error };

    try {
      const providerUrl = blockChainServerUrl;

      // Request account access
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
      }
      console.log("sendCreatortrx " + providerUrl);
      //use provider url if not using metamask
      // const providerUrl = blockChainServerUrl;
      const web3Instance = await new Web3(
        new Web3.providers.HttpProvider(providerUrl)
      );

      const contractInstance = new web3Instance.eth.Contract(
        contractABI,
        chainContractAddress
      );
      if (Object.is(contractInstance, null)) {
        console.log("contractInstance is null");
      } else {
        // Transaction details

        console.log(
          "contect instance detail" +
            contractInstance.defaultChain.toString() +
            address
        );
        const result = await contractInstance.methods
          .stakeCreatorTokens(Web3.utils.toWei(String(rewardAmount), "ether")) // Replace with the desired amount
          .send({
            from: address,
            value: Web3.utils.toWei(String(stakeToken), "ether"), // Amount of Ether sent (if applicable)
            gas: "300000", // Try increasing the gas limit
            gasPrice: Web3.utils.toWei("20", "gwei"), // Set the gas price
          });
        return { success: true, transactionHash: result.transactionHash };
      }
    } catch (error) {
      return { success: false, error };
    }
  };
  const sendTrainerTransaction = async (
    taskID: string,
    description: string,
    stakeAmount: string
  ) => {
    if (!isConnected) {
      const connection = await connectWallet();
      if (!connection.success)
        return { success: false, error: connection.error };
    }

    try {
      const providerUrl = blockChainServerUrl;

      // Request account access
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
      }
      //use provider url if not using metamask
      // const providerUrl = blockChainServerUrl;
      const web3Instance = await new Web3(
        new Web3.providers.HttpProvider(providerUrl)
      );

      const contractInstance = new web3Instance.eth.Contract(
        contractABI,
        chainContractAddress
      );
      if (Object.is(contractInstance, null)) {
        console.log("contractInstance is null");
      } else {
        // Transaction details

        const result = await contractInstance.methods
          .stakeTokens(taskID, "3") // Replace with the desired amount
          .send({
            from: address,
            value: Web3.utils.toWei(String(stakeAmount), "ether"), // Amount of Ether sent (if applicable)
            gas: "300000", // Try increasing the gas limit
            gasPrice: Web3.utils.toWei("20", "gwei"), // Set the gas price
          });
        return { success: true, transactionHash: result.transactionHash };
      }
    } catch (error) {
      return { success: false, error };
    }
  };

  const sendTransactionWeb = async (
    action: string,
    ...args: any[]
  ): Promise<{
    success: boolean;
    error?: string;
    transactionHash?: string;
    taskID?: string;
  }> => {
    if (action === "stakeTokenCreator") {
      console.log("reward amount " + args[1] + " stake token " + args[4]);
      const rewardAmount = args[1];
      const stakeToken = args[4];
      // implementation for stakeTokenCreator

      const result = await sendCreatorTransaction(rewardAmount, stakeToken);
      if (result != null && result.success) {
        return {
          success: result.success,
          transactionHash:
            result.transactionHash === undefined ? "" : result.transactionHash,
        };
      } else if (result != null && result.error)
        return {
          success: false,
          error: result.error === undefined ? "" : result.error,
        };
    } else if (action === "stakeTrainerNode") {
      const taskID = args[0];
      const NodeDescription = args[1];
      const stakeAmount = args[2];
      console.log("taskID- " + taskID + " descr" + NodeDescription);
      const result = await sendTrainerTransaction(
        taskID,
        NodeDescription,
        stakeAmount
      );
      if (result != null && result.success) {
        // implementation for stakeTokens
        return { success: true, transactionHash: "some-hash" };
      } else {
        throw new Error("Invalid action");
      }
      return { success: false, error: "result not found" };
    }
  };
  const callChainFunction = async (
    action: string,
    ...args: any[]
  ): Promise<Record<string, any>> => {
    if (action === "getTasks") {
      const connection = await connectWallet();
      if (!connection.success)
        return { success: false, error: connection.error };

      try {
        const providerUrl = blockChainServerUrl;

        // Request account access
        if (typeof window.ethereum !== "undefined") {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAddress(accounts[0]);
        }
        console.log("sendCreatortrx " + providerUrl);
        //use provider url if not using metamask
        // const providerUrl = blockChainServerUrl;
        const web3Instance = await new Web3(
          new Web3.providers.HttpProvider(providerUrl)
        );
        const contractInstance = new web3Instance.eth.Contract(
          contractABI,
          chainContractAddress
        );
        if (Object.is(contractInstance, null)) {
          console.log("contractInstance is null");
        } else {
          // Transaction details

          console.log(
            "contractt instance detail" +
              contractInstance.defaultChain.toString() +
              address
          );
          const result = await contractInstance.methods
            .getAvailableTasks()
            .call();
          console.log("Available Tasks:", result);

          // const result = await contractInstance.methods
          //   .getAvailableTasks() // Replace with the desired amount
          //   .call({
          //     from: address,
          //     gas: "300000", // Try increasing the gas limit
          //     gasPrice: Web3.utils.toWei("20", "gwei"), // Set the gas price
          //   });
          // console.log("tasks " + result.toString());
          // const tasks: TaskSummery[] = result.map((task: any) => ({
          //   id: task.id.toString(),
          //   description: task.description,
          //   isActive: task.isActive,
          //   assignedTo: task.assignedTo,
          // }));
          // console.log("tasks " + tasks.toString());

          return { success: true, result };
        }
      } catch (error) {
        return { success: false, error };
      }
    }
  };
  return {
    isConnected,
    address,
    connectWallet,
    // sendTransaction,
    sendTransactionWeb,
    callChainFunction,
  };
};
