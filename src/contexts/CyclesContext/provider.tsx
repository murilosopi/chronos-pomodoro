import { useReducer } from "react";
import { CyclesContext } from ".";
import { initialCyclesState } from "../../constants/initialCyclesState";
import { cyclesReducer } from "./reducer";
import { CyclesActionTypes } from "./actions";
import { CycleModel } from "../../models/CycleModel";
type CyclesContextProviderProps = {
  children: React.ReactNode;
};
export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [state, dispatch] = useReducer(cyclesReducer, initialCyclesState);

  const startNewCycle = (cycle: CycleModel) => {
    dispatch({
      type: CyclesActionTypes.START_CYCLE,
      payload: cycle,
    });
  };

  const interruptLastCycle = () => {
    dispatch({
      type: CyclesActionTypes.INTERRUPT_LAST_CYCLE,
    });
  };

  return (
    <CyclesContext.Provider
      value={{ state, interruptLastCycle, startNewCycle }}
    >
      {children}
    </CyclesContext.Provider>
  );
};
