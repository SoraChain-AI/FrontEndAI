import LogBox from "./LogBox";
import SectionPanelAI from "./SectionPanelAI";
import SectionPanelBlockChain from "./SectionPanelBlockChain";

const Page = () => {
  // const handleOnSubmit = (inputValue: string) => console.log(inputValue);

  return (
    <>
      <div className="container-sm">
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <SectionPanelBlockChain sectionName="BlockChain Layer" />
            <LogBox boxLabel="BlockChain Log" textData=""></LogBox>
          </div>

          <div className="col-sm-6">
            <SectionPanelAI sectionName="AI Layer" />
            <LogBox boxLabel="AI Layer Log" textData=""></LogBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
