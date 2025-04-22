import { useContext } from "react";
import { CyclesContext } from ".";

export const useCyclesContext = () => {
  const { state, interruptLastCycle, startNewCycle, clearCyclesHistory } =
    useContext(CyclesContext);

  return {
    state,
    interruptLastCycle,
    startNewCycle,
    clearCyclesHistory,
  };
};
