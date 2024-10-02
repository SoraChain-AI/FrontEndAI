import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  boxLabel: string;
  textData: string;
}

function LogBox({ boxLabel = "Default", textData }: Props) {
  const [logBoxData, setLogBoxData] = useState(textData);
  let renderText = textData;
  // const appendText = () => setLogBoxData(logBoxData + renderText + "\n");
  return (
    <>
      <textarea
        className="form-control"
        placeholder={boxLabel}
        // id="floatingTextarea"
        defaultValue={logBoxData}
        // value={renderText}
        // onChange={() => ""}
      ></textarea>
    </>
  );
}

export default LogBox;
