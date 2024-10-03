import { useState, useContext, createContext, useEffect } from "react";
import { logContext } from "./logContext";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  boxLabel: string;
  textData: string;
  id : string;
}

function LogBox({ boxLabel = "Default", textData , id }: Props) {
  // State to hold the previous string
  // const [previousString, setPreviousString] = useState("");
  // State to hold the current string input
  const [currentString, setCurrentString] = useState("");
  const context = useContext(logContext);

  useEffect(() => {
    const data = context?.logs;
    setCurrentString((previousString) => previousString + data);
  }, [context?.logs]);
  // const appendText = () => setLogBoxData(logBoxData + renderText + "\n");
  return (
    <>
      <textarea
        readOnly
        className="form-control"
        placeholder={boxLabel}
        // id="floatingTextarea"
        defaultValue={currentString}
        // value={renderText}
        // onChange={() => ""}
      ></textarea>
    </>
  );
}

export default LogBox;
