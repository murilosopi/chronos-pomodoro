import { CycleTypes } from "../enums/CycleTypes";

export class Cycle {
  type: CycleTypes;
  start?: Date;
  end?: Date;

  constructor(type: CycleTypes) {
    this.type = type;
  }

  started(): boolean {
    return !!this.start;
  }

  completed(): boolean {
    return !!this.end;
  }
}
