import { CycleModel } from "../models/CycleModel";
import { CycleTypes } from "../enums/CycleTypes";
import { cycleTypesDefinitions } from "../constants/cycle";

export class CycleService {
  static getNextType(active: CycleModel[]): CycleTypes {
    const lastCycle = this.getLastCycle(active);

    if (!lastCycle || lastCycle.type !== CycleTypes.Focus)
      return CycleTypes.Focus;
    return active.length === 7 ? CycleTypes.Break : CycleTypes.Rest;
  }

  static getCurrentDescription(active: CycleModel[]): string {
    const lastCycle = this.getLastCycle(active);

    const definitions = cycleTypesDefinitions;

    if (!lastCycle) {
      return definitions.focus.description.notStarted;
    }

    if (!lastCycle.running()) {
      const nextType = this.getNextType(active);
      return definitions[nextType].description.notStarted;
    }

    const lastType = lastCycle.type;
    return definitions[lastType].description.running;
  }

  static hasRunningCycle(active: CycleModel[]): boolean {
    return this.getLastCycle(active)?.running() || false;
  }

  static getLastCycle(active: CycleModel[]): CycleModel | null {
    return active[active.length - 1] || null;
  }
}
