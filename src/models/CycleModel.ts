import { v4 as uuidv4 } from "uuid";
import { CycleTypes } from "../enums/CycleTypes";

export class CycleModel {
  taskName: string;
  id: string = uuidv4();
  type: CycleTypes;
  startDate: Date = new Date();
  completeDate?: Date;
  interruptDate?: Date;

  constructor({ type, taskName }: { type: CycleTypes; taskName: string }) {
    this.type = type;
    this.taskName = taskName;
  }

  started(): boolean {
    return !!this.startDate;
  }

  completed(): boolean {
    return !!this.completeDate;
  }

  interrupted(): boolean {
    return !!this.interruptDate;
  }
}
