import { CycleModel } from "../../models/CycleModel";

export enum CyclesActionTypes {
  START_CYCLE = "START_CYCLE",
  INTERRUPT_LAST_CYCLE = "INTERRUPT_LAST_CYCLE",
  RESET_STATE = "RESET_STATE",
}

type StartCycleAction = {
  type: CyclesActionTypes.START_CYCLE;
  payload: CycleModel;
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
  | ResetStateAction;
