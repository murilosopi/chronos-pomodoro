import { CycleTypes } from "../enums/CycleTypes";
import { CyclesStateModel } from "../models/CyclesStateModel";

export const initialCyclesState: CyclesStateModel = {
  activeCycles: [],
  currentCycle: null,
  cycles: [],
  secondsRemaining: 0,
  timeConfig: {
    [CycleTypes.Break]: 15 * 60,
    [CycleTypes.Focus]: 25 * 60,
    [CycleTypes.Rest]: 5 * 60,
  },
};
