import { useContext } from "react";
import { CyclesContext } from "../contexts/CyclesContext";

export const useCyclesContext = () => {
  const { state, setState } = useContext(CyclesContext);

  return {
    state,
    setState,
  };
};
