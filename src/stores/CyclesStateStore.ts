import { stateKey } from "../constants/storage";
import { allCycleTypes, CycleTypes, isCycleType } from "../enums/CycleTypes";
import { CycleModel } from "../models/CycleModel";
// import { CycleModel } from "../models/CycleModel";
// import { CycleModel } from "../models/CycleModel";
import { CyclesStateModel } from "../models/CyclesStateModel";

type CycleDTO = {
  id: string;
  type: string;
  taskName: string;
  startDate: string;
  completeDate: string | null;
  interruptDate: string | null;
};

type CyclesStateDTO = {
  cycles: CycleDTO[];
  activeCycles: CycleDTO[];
  secondsRemaining: number;
  timeConfig: Record<string, number>;
};

export class CyclesStateStore {
  static store(state: CyclesStateModel) {
    try {
      localStorage.setItem(stateKey, JSON.stringify(state));
    } catch (error) {
      console.warn("error on state storage", error);
    }
  }

  static recover(): CyclesStateModel | null {
    const rawState = localStorage.getItem(stateKey);
    if (!rawState) return null;

    const state = new CyclesStateModel();
    const {
      cycles: storedCycles,
      activeCycles: storedActiveCycles,
      secondsRemaining: storedSecondsRemaining,
      timeConfig: storedTimeConfig,
    } = JSON.parse(rawState) as CyclesStateDTO;

    const activeCyclesIDs = new Set(storedActiveCycles?.map(({ id }) => id));

    state.cycles =
      storedCycles?.filter(this.filterCycles)?.map(this.mapCycles) || [];

    state.activeCycles = state.cycles.filter(({ id }) =>
      activeCyclesIDs.has(id)
    );

    state.secondsRemaining = storedSecondsRemaining;

    allCycleTypes.forEach((type: CycleTypes) => {
      if (storedTimeConfig[type])
        state.timeConfig[type] = storedTimeConfig[type];
    });

    return state;
  }

  private static filterCycles({
    id,
    type,
    taskName,
    startDate,
  }: {
    id: string;
    type: string;
    taskName: string;
    startDate: string;
  }) {
    return (
      isCycleType(type) &&
      [id, type, taskName, startDate].every((value) => value)
    );
  }

  private static mapCycles({
    id,
    type,
    taskName,
    startDate,
    completeDate,
    interruptDate,
  }: CycleDTO) {
    const cycle = new CycleModel({
      id,
      taskName,
      type: type as CycleTypes,
      startDate: new Date(startDate),
      completeDate: completeDate ? new Date(completeDate) : null,
      interruptDate: interruptDate ? new Date(interruptDate) : null,
    });

    return cycle;
  }
}
