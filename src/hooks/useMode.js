import { useContext } from "react";
import { ModeContext } from "../ProvideMode";

const useMode = () => {
  return useContext(ModeContext);
};
export default useMode;
