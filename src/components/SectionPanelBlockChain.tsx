import { useState } from "react";
import InputPanel from "./InputPanel";
import Page from "./Page";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  sectionName: string;
  //we can add more funciton to be passed to the paretn herer
}

const SectionPanelBlockChain = ({ sectionName }: Props) => {
  const handleDeployContract = (inputValue: string) => console.log(inputValue);
  const handleStackServer = (inputValue: string) => console.log(inputValue);
  const handleStackClient = (inputValue: string) => console.log(inputValue);
  return (
    <>
      <div className=" p-4 mb-2 bg-body-tertiary">
        <h1>{sectionName}</h1>

        <div className="input-group mb-3">
          <label>Contract Address </label>
          <input
            className="form-control"
            type="text"
            value=""
            aria-label="readonly input example"
            readOnly
          ></input>
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
