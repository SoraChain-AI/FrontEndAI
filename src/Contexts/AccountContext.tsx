import React, { createContext, ReactNode, useState } from "react";

interface AccountContextProviderProp {
  children: ReactNode;
}

export const AccountContext = createContext<{
  accountAddress: string | null;
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}>({
  accountAddress: null,
  setAccount: () => {},
});

export const AccountProvider = ({ children }: AccountContextProviderProp) => {
  const [account, setAccount] = useState<string | null>(null);

  return (
    <AccountContext.Provider value={{ accountAddress: account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};
