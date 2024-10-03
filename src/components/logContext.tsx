import { createContext, ReactNode, useState } from "react";

interface logContextType {
  logs: string;
  updateLog: (newLog: string, id: string) => void;
}

interface logContextProviderProp {
  children: ReactNode;
}

export const logContext = createContext<logContextType | undefined>(
  //{
  //   logs: "hell",
  //   updateLog: (newLog: string) => {},
  // });
  undefined
);

export const UserProvider = ({ children }: logContextProviderProp) => {
  const [logs, setLogs] = useState("");
  const updateLog = (newLog: string) => {
    console.log("updatelog in povider", { newLog });
    setLogs(newLog);
  };
  return (
    <logContext.Provider value={{ logs, updateLog }}>
      {children}
    </logContext.Provider>
  );
};
