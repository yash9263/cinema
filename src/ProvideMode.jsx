import { createContext, useState } from "react";

export const ModeContext = createContext();

const ProvideMode = ({ children }) => {
  const [context, setContext] = useState("movie");
  return (
    <ModeContext.Provider value={[context, setContext]}>
      {children}
    </ModeContext.Provider>
  );
};
export default ProvideMode;
