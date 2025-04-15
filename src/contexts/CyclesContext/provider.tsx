import { useReducer } from "react";
import { CyclesContext } from ".";
import { initialCyclesState } from "../../constants/initialCyclesState";
import { cyclesReducer } from "./reducer";
type CyclesContextProviderProps = {
  children: React.ReactNode;
};
export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [state, dispatch] = useReducer(cyclesReducer, initialCyclesState);

  return (
    <CyclesContext.Provider value={{ state, dispatch }}>
      {children}
    </CyclesContext.Provider>
  );
};
