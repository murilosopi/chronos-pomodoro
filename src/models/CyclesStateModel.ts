import { CycleTypes } from "../enums/CycleTypes";
import { CycleModel } from "./CycleModel";

type TimeConfigType = {
  [key in CycleTypes]: number;
};

export class CyclesStateModel {
  cycles: CycleModel[] = [];
  activeCycles: CycleModel[] = [];
  secondsRemaining: number = 0;
  timeConfig: TimeConfigType = {
    [CycleTypes.Focus]: 25 * 60,
    [CycleTypes.Break]: 15 * 60,
    [CycleTypes.Rest]: 5 * 60,
  };

  addCycle(cycle: CycleModel) {
    this.cycles.push(cycle);

    if (this.activeCycles.length === 8) this.activeCycles.splice(0);

    this.activeCycles.push(cycle);

    this.secondsRemaining = this.timeConfig[cycle.type];
  }

  clone(): CyclesStateModel {
    const newCycleState = new CyclesStateModel();

    Object.assign(newCycleState, {
      ...this,
      timeConfig: { ...this.timeConfig },
      cycles: this.cycles.map((c) => c.clone()),
      activeCycles: this.activeCycles.map((c) => c.clone()),
    });

    return newCycleState;
  }
}
