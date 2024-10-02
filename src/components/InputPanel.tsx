import "bootstrap/dist/css/bootstrap.css";
import { ReactNode, useState } from "react";

interface Props {
  buttonName: string;
  onSubmitClicked: (inputValue: string) => void;
}

const InputPanel = ({ buttonName, onSubmitClicked }: Props) => {
  const [inputValue, setInputValue] = useState("");

  // const handleButtonCLick = () => onSubmitClicked(inputValue);
  return (
    <>
      <input
        type="text"
        className="form-control"
        // id="inputAddress1"
        placeholder="address 0x7234g"
        aria-label="0x7234g"
        aria-describedby="basic-addon1"
        // value="0x7234g..."
        onChange={(e) => setInputValue(e.target.value)} // Update local state
        required
      ></input>
      <button
        className="btn btn-primary"
        // id="Submit1"
        type="submit"
        onClick={() => {
          onSubmitClicked(inputValue);
        }}
      >
        {buttonName}
      </button>
    </>
  );
};

export default InputPanel;
