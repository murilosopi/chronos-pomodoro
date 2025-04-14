import { useContext, useEffect } from "react";
import { CyclesContext } from "../contexts/CyclesContext";
import { CycleModel } from "../models/CycleModel";

export const useCyclesContext = () => {
  const { state, setState } = useContext(CyclesContext);

  useEffect(() => {
    console.log("[state changed]", state);
  }, [state]);

  const addCycle = (newCycle: CycleModel) => {
    setState((prevState) => {
      const newState = prevState.clone();

      newState.addCycle(newCycle);

      return newState;
    });
  };

  const interruptCurrentCycle = () => {
    setState((prevState) => {
      const newState = prevState.clone();

      newState.interruptLastCycle();

      return newState;
    });
  };

  return {
    state,
    addCycle,
    interruptCurrentCycle,
  };
};
