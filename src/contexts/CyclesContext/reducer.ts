import { initialCyclesState } from "../../constants/initialCyclesState";
import { CyclesStateModel } from "../../models/CyclesStateModel";
import { CycleActionModel, CyclesActionTypes } from "./actions";

export const cyclesReducer = (
  prevState: CyclesStateModel,
  action: CycleActionModel
): CyclesStateModel => {
  switch (action.type) {
    case CyclesActionTypes.START_CYCLE: {
      const newState = prevState.clone();

      newState.addCycle(action.payload);

      return newState;
    }
    case CyclesActionTypes.INTERRUPT_LAST_CYCLE: {
      const newState = prevState.clone();

      newState.interruptLastCycle();

      return newState;
    }
    case CyclesActionTypes.RESET_STATE: {
      return initialCyclesState;
    }
  }

  return prevState;
};
