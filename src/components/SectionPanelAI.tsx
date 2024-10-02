import InputPanel from "./InputPanel";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  sectionName: string;
}

const SectionPanelAI = ({ sectionName }: Props) => {
  const handleStartServer = (inputValue: string) => console.log(inputValue);
  const handleStartClient = (inputValue: string) => console.log(inputValue);
  return (
    <>
      <div className=" p-4 mb-2 bg-body-tertiary">
        <h1>{sectionName}</h1>
        <div className="input-group mb-3">
          <InputPanel
            buttonName="Start Server"
            onSubmitClicked={handleStartServer}
          ></InputPanel>
        </div>
        <div className="input-group mb-3">
          <InputPanel
            buttonName="Start Client"
            onSubmitClicked={handleStartClient}
          ></InputPanel>
        </div>
      </div>
    </>
  );
};

export default SectionPanelAI;
