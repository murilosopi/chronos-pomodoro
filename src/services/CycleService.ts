import { CycleModel } from "../models/CycleModel";
import { CycleTypes } from "../enums/CycleTypes";

export class CycleService {
  static getNextType(active: CycleModel[]): CycleTypes {
    const lastCycle = this.getLastCycle(active);

    if (!lastCycle || lastCycle.type !== CycleTypes.Focus)
      return CycleTypes.Focus;
    return active.length === 7 ? CycleTypes.Break : CycleTypes.Rest;
  }


  static hasRunningCycle(active: CycleModel[]): boolean {
    return this.getLastCycle(active)?.running() || false;
  }

  static getLastCycle(active: CycleModel[]): CycleModel | null {
    return active[active.length - 1] || null;
  }
}
