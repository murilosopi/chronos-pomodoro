import { initialCyclesState } from "../../constants/initialCyclesState";
import { CyclesStateModel } from "../../models/CyclesStateModel";
import { CycleActionModel, CyclesActionTypes } from "./actions";

export const cyclesReducer = (
  prevState: CyclesStateModel,
  action: CycleActionModel
): CyclesStateModel => {
  const newState = prevState.clone();

  switch (action.type) {
    case CyclesActionTypes.START_CYCLE: {
      newState.addCycle(action.payload);

      return newState;
    }
    case CyclesActionTypes.INTERRUPT_LAST_CYCLE: {
      newState.interruptLastCycle();

      return newState;
    }
    case CyclesActionTypes.COMPLETE_LAST_CYCLE: {
      newState.completeLastCycle();

      return newState;
    }
    case CyclesActionTypes.UPDATE_TIMER: {
      newState.secondsRemaining = action.payload;
      return newState;
    }
    case CyclesActionTypes.RESET_STATE: {
      return initialCyclesState;
    }
  }

  return prevState;
};
