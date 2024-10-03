import { useState } from "react";
import LogBox from "./LogBox";
import SectionPanelAI from "./SectionPanelAI";
import SectionPanelBlockChain from "./SectionPanelBlockChain";
import { UserProvider } from "./logContext";
const Page = () => {
  // const handleOnSubmit = (inputValue: string) => console.log(inputValue);
  //for passing logs to any component
  const [logs, setLog] = useState("");

  const logger = () => setLog(logs);
  return (
    <>
      <UserProvider>
        <div className="container-sm">
          <div className="row justify-content-between">
            <div className="col-sm-6">
              <SectionPanelBlockChain sectionName="BlockChain Layer" id="1" />
              <LogBox boxLabel="BlockChain Log" textData="" id="1"></LogBox>
            </div>

            <div className="col-sm-6">
              <SectionPanelAI sectionName="AI Layer" id="2" />
              {/* <LogBox boxLabel="AI Layer Log" textData="" id="2"></LogBox> */}
            </div>
          </div>
        </div>
      </UserProvider>
    </>
  );
};

export default Page;
