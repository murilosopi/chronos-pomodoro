import { createContext } from "react";
import { CyclesStateModel } from "../../models/CyclesStateModel";
import { initialCyclesState } from "../../constants/initialCyclesState";
import { CycleModel } from "../../models/CycleModel";
import { CycleTypes } from "../../enums/CycleTypes";

type CyclesContextProps = {
  state: CyclesStateModel;
  startNewCycle: (cycle: CycleModel) => void;
  interruptLastCycle: () => void;
  clearCyclesHistory: () => void;
  updateTimeConfig: (cycleType: CycleTypes, seconds: number) => void;
};

export const CyclesContext = createContext<CyclesContextProps>({
  state: initialCyclesState,
  startNewCycle: () => {},
  interruptLastCycle: () => {},
  clearCyclesHistory: () => {},
  updateTimeConfig: () => {},
});
