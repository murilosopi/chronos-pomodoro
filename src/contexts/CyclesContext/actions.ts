import { CycleTypes } from "../../enums/CycleTypes";
import { CycleModel } from "../../models/CycleModel";

export enum CyclesActionTypes {
  START_CYCLE = "START_CYCLE",
  INTERRUPT_LAST_CYCLE = "INTERRUPT_LAST_CYCLE",
  COMPLETE_LAST_CYCLE = "COMPLETE_LAST_CYCLE",
  UPDATE_TIMER = "UPDATE_TIMER",
  RESET_STATE = "RESET_STATE",
  CLEAR_HISTORY = "CLEAR_HISTORY",
  UPDATE_TIME_CONFIG = "UPDATE_TIME_CONFIG",
}

type StartCycleAction = {
  type: CyclesActionTypes.START_CYCLE;
  payload: CycleModel;
};

type UpdateTimerAction = {
  type: CyclesActionTypes.UPDATE_TIMER;
  payload: number;
};

type CompleteCycleAction = {
  type: CyclesActionTypes.COMPLETE_LAST_CYCLE;
};

type InterruptCycleAction = {
  type: CyclesActionTypes.INTERRUPT_LAST_CYCLE;
};

type ResetStateAction = {
  type: CyclesActionTypes.RESET_STATE;
};

type ClearHistoryAction = {
  type: CyclesActionTypes.CLEAR_HISTORY;
};

type UpdateTimeConfigAction = {
  type: CyclesActionTypes.UPDATE_TIME_CONFIG;
  payload: {
    seconds: number;
    type: CycleTypes;
  };
};

export type CycleActionModel =
  | StartCycleAction
  | InterruptCycleAction
  | UpdateTimerAction
  | CompleteCycleAction
  | ResetStateAction
  | ClearHistoryAction
  | UpdateTimeConfigAction;
