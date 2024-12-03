import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Web3, { Contract, Web3BaseWallet } from "web3";
import styles from "./Hero.module.css";
// import { SoraChainDashboard } from "../DashBoard/SoraChainDashboard";
import "../../utils/constants";
import {
  blockChainServerUrl,
  chainContractAddress,
  contractABI,
  // registerServerFunction,
  // accountaddress1,
} from "../../utils/constants";
import { AccountContext } from "../../Contexts/AccountContext";

//   if (window.ethereum) {
//     try {
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       await window.ethereum.on("accountsChanged", function (accounts) {
//         // Time to reload your interface with accounts[0]!
//         console.log(accounts[0]);
//       });
//       // setAccount(accounts[0]);
//       // initWeb3();
//     } catch (error) {
//       console.error("User rejected the request", error);
//     }
//   } else {
//     alert("Please install MetaMask!");
//   }
// };

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  // //for blockchain server variables
  // const [log, SetLog] = useState("");
  const [contract, Setcontract] = useState<Contract<typeof contractABI> | null>(
    null
  );
  const [connected, setConnected] = useState(false);
  const [userAccount, setUserAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);

  const context = useContext(AccountContext);

  //Get the cached connected account address from local storage
  // useEffect(() => {
  //   const storedAccount = localStorage.getItem("connectedAccount");
  //   if (storedAccount) {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner(storedAccount);
  //     setConnectedAccount(storedAccount);
  //   }
  // }, []);

  //handler to connect with contract on clickcing connectContract button
  const onContractConnect = (contract: string) => {
    console.log("connect to contract " + contract);
    console.log("Contract connected!");
    setConnected(true);
    context.setAccount(contract);
    console.log("connected to server  with wallet " + context.accountAddress);
    // Navigate to the dashboard page after connection
    navigate("/dashboard");
    // context?.updateLog("connected to server  with wallet " + contract, id);
  };

  useEffect(() => {
    const storedAccount = localStorage.getItem("connectedAccount");
    if (storedAccount && window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);

        web3Instance.eth.defaultAccount = storedAccount;
        setUserAccount(storedAccount);
        if (web3Instance.eth.defaultBlock) {
          setConnected(true);
          context.setAccount(storedAccount);
          console.log(
            "use effect stored account changes " +
              storedAccount +
              web3Instance.eth.defaultAccount
          );
          const timer = setTimeout(() => {
            navigate("/dashboard");
          }, 3000); // navigate to dashboard after 1 second
          return () => clearTimeout(timer); // clear the timer when the component unmounts
        } else {
          throw console.error("account not found");
        }

        console.log("connected to account " + storedAccount);
      } catch (error) {
        console.error("User rejected the request", error);
        alert("Account not found,please connect again");
        setUserAccount(null);
        setConnected(false);
      }
    }
  });

  // Function to connect to MetaMask
  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await window.ethereum.on("accountsChanged", function (accounts) {
          // Time to reload your interface with accounts[0]!
          console.log(accounts[0]);
        });
        setUserAccount(accounts[0]);
        context.setAccount(accounts[0]);
        // Store the connected account address in local storage
        localStorage.setItem("connectedAccount", accounts[0]);
        initWeb3();
      } catch (error) {
        console.error("User rejected the request", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  //for blockchain server variables and connections
  const initWeb3 = async () => {
    const providerUrl = blockChainServerUrl;
    const web3Instance = await new Web3(
      new Web3.providers.HttpProvider(providerUrl)
    );

    const contractInstance = new web3Instance.eth.Contract(
      contractABI,
      chainContractAddress
    );
    setWeb3(web3Instance);
    Setcontract(contractInstance);

    if (Object.is(contractInstance, null)) {
    } else {
      const trxDetail = await web3Instance.eth.getTransactionFromBlock(
        "latest",
        0
      );
      onContractConnect(chainContractAddress);
    }
  };

  return (
    <section className={styles.hero}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/ae1a574c40cc467faaa61354a5b36b7e/9978017b1f9088ccd006ff9a42e67c0103f74fab7c5d9d0f0c28fbf0b8b95fd3?apiKey=ae1a574c40cc467faaa61354a5b36b7e&"
        alt="Sorachain AI platform visualization"
        className={styles.heroImage}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Sorachain AI</h1>
        <p className={styles.description}>
          Start creating, validating, and training with your MetaMask wallet. No
          account required.
        </p>
        {connected ? (
          <p className={styles.description}>Connected wallet: {userAccount}</p>
        ) : (
          <button
            className={styles.connectButton}
            type="button"
            onClick={() => {
              /* Wallet connect logic */
              handleConnectWallet();
            }}
          >
            {connected ? "Connected" : "Connect Wallet"}{" "}
          </button>
        )}
      </div>
    </section>
  );
};
