import { useState } from "react";
import { CyclesContext } from ".";
import { initialCyclesState } from "../../constants/initialCyclesState";

type CyclesContextProviderProps = {
  children: React.ReactNode;
};
export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [state, setState] = useState(initialCyclesState);

  return (
    <CyclesContext.Provider value={{ state, setState }}>
      {children}
    </CyclesContext.Provider>
  );
};
