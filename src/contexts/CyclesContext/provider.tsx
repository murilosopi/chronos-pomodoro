import { useEffect, useReducer } from "react";
import { CyclesContext } from ".";
import { initialCyclesState } from "../../constants/initialCyclesState";
import { cyclesReducer, cyclesReducerInitializer } from "./reducer";
import { CyclesActionTypes } from "./actions";
import { CycleModel } from "../../models/CycleModel";
import { TimerWorkerManager } from "../../workers/timerWorkerManager";
import { CycleService } from "../../services/CycleService";
import { CyclesStateStore } from "../../stores/CyclesStateStore";
import { CycleTypes } from "../../enums/CycleTypes";
type CyclesContextProviderProps = {
  children: React.ReactNode;
};
export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [state, dispatch] = useReducer(
    cyclesReducer,
    initialCyclesState,
    cyclesReducerInitializer
  );

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

  const clearCyclesHistory = () => {
    dispatch({
      type: CyclesActionTypes.CLEAR_HISTORY,
    });
  };

  const updateTimeConfig = (type: CycleTypes, seconds: number) => {
    dispatch({
      type: CyclesActionTypes.UPDATE_TIME_CONFIG,
      payload: {
        seconds,
        type,
      },
    });
  };

  const worker = TimerWorkerManager.getInstance();

  worker.listenTimerTick((e: MessageEvent<number>) => {
    const timerCount = Math.max(0, e.data);
    if (timerCount === 0) {
      worker.terminate();

      dispatch({
        type: CyclesActionTypes.COMPLETE_LAST_CYCLE,
      });

      return;
    }

    dispatch({
      type: CyclesActionTypes.UPDATE_TIMER,
      payload: timerCount,
    });
  });

  useEffect(() => {
    if (!CycleService.hasRunningCycle(state.activeCycles)) {
      worker.terminate();
    }

    worker.postState(state);
  }, [state, worker]);

  useEffect(() => {
    CyclesStateStore.store(state);

    console.log("[state changed]", state);
  }, [state]);

  return (
    <CyclesContext.Provider
      value={{
        state,
        interruptLastCycle,
        startNewCycle,
        clearCyclesHistory,
        updateTimeConfig,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
};
