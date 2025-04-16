import { useContext } from "react";
import { CyclesContext } from ".";

export const useCyclesContext = () => {
  const { state, interruptLastCycle, startNewCycle } =
    useContext(CyclesContext);

  return {
    state,
    interruptLastCycle,
    startNewCycle,
  };
};
