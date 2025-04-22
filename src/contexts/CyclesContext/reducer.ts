import { initialCyclesState } from "../../constants/initialCyclesState";
import { CyclesStateModel } from "../../models/CyclesStateModel";
import { CycleService } from "../../services/CycleService";
import { CyclesStateStore } from "../../stores/CyclesStateStore";
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
    case CyclesActionTypes.UPDATE_TIME_CONFIG: {
      newState.timeConfig[action.payload.type] = action.payload.seconds;
      return newState;
    }
    case CyclesActionTypes.CLEAR_HISTORY: {
      newState.clearCycles();

      return newState;
    }
    case CyclesActionTypes.RESET_STATE: {
      return initialCyclesState;
    }
  }

  return prevState;
};

export const cyclesReducerInitializer = () => {
  try {
    const recoveredState = CyclesStateStore.recover();

    if (recoveredState) {
      const hasRunningCycle = CycleService.hasRunningCycle(
        recoveredState.activeCycles
      );
      if (hasRunningCycle) {
        recoveredState.interruptLastCycle();
      }

      return recoveredState;
    }
  } catch (error) {
    console.warn("error on recover stored state", error);
  }

  return initialCyclesState;
};
