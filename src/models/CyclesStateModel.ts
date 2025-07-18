import { CycleTypes } from "../enums/CycleTypes";
import { CycleService } from "../services/CycleService";
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

  interruptLastCycle() {
    const lastCycle = CycleService.getLastCycle(this.activeCycles);

    if (!lastCycle) return;

    lastCycle.interruptDate = new Date();

    this.secondsRemaining = 0;
  }

  completeLastCycle() {
    const lastCycle = CycleService.getLastCycle(this.activeCycles);

    if (!lastCycle) return;

    lastCycle.completeDate = new Date();

    this.secondsRemaining = 0;
  }

  clearCycles() {
    this.cycles = [];
    this.activeCycles = [];
    this.secondsRemaining = 0;
  }

  clone(): CyclesStateModel {
    const newCycleState = new CyclesStateModel();

    const activeCyclesIds = new Set(this.activeCycles.map(({ id }) => id));

    const cycles = this.cycles.map((c) => c.clone());

    const activeCycles = cycles.filter(({ id }) => activeCyclesIds.has(id));

    Object.assign(newCycleState, {
      ...this,
      timeConfig: { ...this.timeConfig },
      cycles,
      activeCycles,
    });

    return newCycleState;
  }
}
