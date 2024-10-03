import { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Web3, { Contract, Web3BaseWallet } from "web3";
import "../utils/constants";
import InputPanel from "./InputPanel";
import {
  blockChainServerUrl,
  chainContractAddress,
  contractABI,
  registerServerFunction,
  accountaddress1,
} from "../utils/constants";
import { logContext } from "./logContext";

interface SectionProps {
  sectionName: string;
  id: string;
  //we can add more funciton to be passed to the paretn herer
}

const SectionPanelBlockChain = ({ sectionName, id }: SectionProps) => {
  const handleDeployContract = (inputValue: string) => console.log(inputValue);
  const handleStackServer = (inputValue: string) => {
    console.log(inputValue);
    // callContractFunction();
  };
  const handleStackClient = (inputValue: string) => console.log(inputValue);
  const [web3, setWeb3] = useState<Web3 | null>(null);

  //for blockchain server variables
  const [log, SetLog] = useState("");
  const [contract, Setcontract] = useState<Contract<typeof contractABI> | null>(
    null
  );

  //Logging Context , variable
  const context = useContext(logContext);

  //handler to connect with contract on clickcing connectContract button
  const onContractConnect = (contract: string) => {
    console.log("connect " + contract);
    context?.updateLog("connected to server  with wallet " + contract, id);
  };

  //initialized connection with blockchain server
  //we can do this with metamask for connecting to chain and getting addresses
  // useEffect(() => {
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
      const logDetail =
        chainContractAddress +
        "\n with latest block transaction hash" +
        trxDetail?.hash;
      SetLog(logDetail);
      onContractConnect(logDetail);
      // const trxDetail = await web3Instance.eth.getTransactionFromBlock("latest", 0);
      //we can access all other information of blockchain
      //ex- fetching first trx of the latest block
    }
  };

  //method to call method of actual contract from front end
  // const callContractFunction = async () => {
  //   if (contract) {
  //     try {
  //       const result = await contract.methods
  //         .registerSubNetOwner()
  //         .send({ from: accountaddress1 });
  //       console.log("Result:", result);
  //     } catch (error) {
  //       console.error("Error calling contract function:", error);
  //     }
  //   } else {
  //     console.error("Contract is not initialized");
  //   }
  // };

  return (
    <>
      <div className=" p-4 mb-2 bg-body-tertiary">
        <h1>{sectionName}</h1>

        <div className="input-group mb-3">
          <label>Contract </label>
          <input
            className="form-control"
            type="text"
            value=""
            aria-label="readonly input example"
            readOnly
          ></input>
          <button
            className="btn btn-primary"
            // id="Submit1"
            type="button"
            onClick={() => {
              initWeb3();
            }}
          >
            {"Connect Chain"}
          </button>
        </div>
        <div className="input-group mb-3">
          <InputPanel
            buttonName="Stack Server"
            onSubmitClicked={handleStackServer}
          ></InputPanel>
        </div>
        <div className="input-group mb-3">
          <InputPanel
            buttonName="Stack Client"
            onSubmitClicked={handleStackClient}
          ></InputPanel>
        </div>
      </div>
    </>
  );
};

export default SectionPanelBlockChain;
