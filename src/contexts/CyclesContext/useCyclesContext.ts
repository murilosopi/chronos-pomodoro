import { useContext, useEffect } from "react";
import { CyclesContext } from ".";

export const useCyclesContext = () => {
  const { state, dispatch } = useContext(CyclesContext);

  useEffect(() => {
    console.log("[state changed]", state);
  }, [state]);

  return {
    state,
    dispatch,
  };
};
