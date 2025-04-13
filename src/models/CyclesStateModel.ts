import { CycleTypes } from "../enums/CycleTypes";
import { CycleModel } from "./CycleModel";

type TimeConfigType = {
  [key in CycleTypes]: number;
};

export class CyclesStateModel {
  cycles: CycleModel[] = [];
  activeCycles: CycleModel[] = [];
  currentCycle: CycleModel | null = null;
  secondsRemaining: number = 0;
  timeConfig: TimeConfigType = {
    [CycleTypes.Focus]: 25 * 60,
    [CycleTypes.Break]: 15 * 60,
    [CycleTypes.Rest]: 5 * 60,
  };

  nextCycleType() {
    if (!this.currentCycle || this.currentCycle?.type !== CycleTypes.Focus)
      return CycleTypes.Focus;

    if (this.activeCycles.length == 7) return CycleTypes.Break;

    return CycleTypes.Rest;
  }

  addCycle(cycle: CycleModel) {
    this.currentCycle = cycle;

    this.cycles.push(cycle);

    if (this.activeCycles.length === 8) this.activeCycles.splice(0);

    this.activeCycles.push(cycle);
  }

  clone(): CyclesStateModel {
    const newCycleState = new CyclesStateModel();

    Object.assign(newCycleState, {
      ...this,
      timeConfig: { ...this.timeConfig },
      cycles: [...this.cycles],
      activeCycles: [...this.activeCycles],
      currentCycle:
        this.currentCycle === null ? null : { ...this.currentCycle },
    });

    return newCycleState;
  }
}
