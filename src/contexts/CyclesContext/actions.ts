import { CycleModel } from "../../models/CycleModel";

export enum CyclesActionTypes {
  START_CYCLE = "START_CYCLE",
  INTERRUPT_LAST_CYCLE = "INTERRUPT_LAST_CYCLE",
  COMPLETE_LAST_CYCLE = "COMPLETE_LAST_CYCLE",
  UPDATE_TIMER = "UPDATE_TIMER",
  RESET_STATE = "RESET_STATE",
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

export type CycleActionModel =
  | StartCycleAction
  | InterruptCycleAction
  | UpdateTimerAction
  | CompleteCycleAction
  | ResetStateAction;
