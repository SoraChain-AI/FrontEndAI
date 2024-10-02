import { useState } from "react";
import InputPanel from "./InputPanel";
import Page from "./Page";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  sectionName: string;
  buttonNames: string[];
}

const SectionPanel = ({ sectionName, buttonNames }: Props) => {

  const [functionName, setFunctionName] = useState()
  const handleDeployContract = () => console.log(1);
  const handleStackServer = () => console.log(2);
  const handleStackClient = () => console.log(3);
  return (
    <>
      <div className=" p-4 mb-2 bg-body-tertiary">
        <h1>{sectionName}</h1>
        {buttonNames.map((button, index) => (
          <div className="input-group mb-3">
            <InputPanel
              buttonName={button}
              onSubmitClicked={
                handleDeployContract}
            ></InputPanel>
          </div>
        ))}

        {/* <div className="input-group mb-3">
          <InputPanel
            buttonNames="Deply Contract"
            onSubmitClicked={handleDeployContract}
          ></InputPanel>
        </div> */}
        {/* <div className="input-group mb-3">
          <InputPanel
            buttonName="Stack Server"
            onSubmitClicked={handleStackServer}
          ></InputPanel>
        </div>
        <div className="input-group mb-3">
          <InputPanel
            buttonName="Stack Client"
            onSubmitClicked={handleStackClient}
          ></InputPanel> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default SectionPanel;
