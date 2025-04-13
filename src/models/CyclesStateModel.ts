import { CycleTypes } from "../enums/CycleTypes";
import { CycleModel } from "./CycleModel";

export type CyclesStateModel = {
  cycles: CycleModel[];
  activeCycles: CycleModel[];
  currentCycle: CycleModel | null;
  secondsRemaining: number;
  timeConfig: {
    [key in CycleTypes]: number;
  };
};
