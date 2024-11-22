import { useState } from "react";
// import { ethers } from 'ethers';
import Web3, { Contract, Web3BaseWallet } from "web3";

export const useWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        // const address = await signer.getAddress();
        // setAddress(address);
        // setIsConnected(true);
        return { success: true, address };
      } catch (error) {
        return { success: false, error };
      }
    }
    return { success: false, error: "MetaMask not installed" };
  };

  const sendTransaction = async (amount: string) => {
    if (!isConnected) {
      const connection = await connectWallet();
      if (!connection.success)
        return { success: false, error: connection.error };
    }

    try {
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();
      // const tx = await signer.sendTransaction({
      //   to: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      //   value: ethers.utils.parseEther(amount)
      // });
      // await tx.wait();
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };

  return { isConnected, address, connectWallet, sendTransaction };
};
