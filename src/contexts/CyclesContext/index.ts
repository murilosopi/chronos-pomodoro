import { createContext } from "react";
import { CyclesStateModel } from "../../models/CyclesStateModel";
import { initialCyclesState } from "../../constants/initialCyclesState";
import { CycleModel } from "../../models/CycleModel";

type CyclesContextProps = {
  state: CyclesStateModel;
  startNewCycle: (cycle: CycleModel) => void;
  interruptLastCycle: () => void;
  clearCyclesHistory: () => void;
};

export const CyclesContext = createContext<CyclesContextProps>({
  state: initialCyclesState,
  startNewCycle: () => {},
  interruptLastCycle: () => {},
  clearCyclesHistory: () => {},
});
