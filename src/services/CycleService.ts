import { CycleModel } from "../models/CycleModel";
import { CycleTypes } from "../enums/CycleTypes";
import { cycleTypesDefinitions } from "../constants/cycle";

export class CycleService {
  static getNextType(active: CycleModel[]): CycleTypes {
    const lastCycle = active[active.length - 1];

    if (!lastCycle || lastCycle.type !== CycleTypes.Focus)
      return CycleTypes.Focus;
    return active.length === 7 ? CycleTypes.Break : CycleTypes.Rest;
  }

  static getCurrentDescription(active: CycleModel[]): string {
    const current = active[active.length - 1];

    const definitions = cycleTypesDefinitions;

    if (!current) {
      return definitions.focus.description.notStarted;
    }

    if (current.completed()) {
      const nextType = this.getNextType(active);
      return definitions[nextType].description.notStarted;
    }

    const currentType = current.type;
    return definitions[currentType].description.running;
  }
}
