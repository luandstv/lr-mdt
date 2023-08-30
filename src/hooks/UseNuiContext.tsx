import { useContext } from "react";
import { NuiContext } from "../context/NuiContext";

export const useNuiContext = () => {
  return useContext(NuiContext);
};
