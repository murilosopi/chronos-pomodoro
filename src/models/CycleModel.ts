import { v4 as uuidv4 } from "uuid";
import { CycleTypes } from "../enums/CycleTypes";

export class CycleModel {
  taskName: string;
  id: string = uuidv4();
  type: CycleTypes;
  startDate: Date = new Date();
  completeDate: Date | null = null;
  interruptDate: Date | null = null;

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

  running(): boolean {
    return !this.interruptDate && !this.completeDate && !!this.startDate;
  }

  clone(): CycleModel {
    const newCycleModel = new CycleModel({
      taskName: this.taskName,
      type: this.type,
    });

    Object.assign(newCycleModel, {
      ...this,
      startDate: this.startDate ? new Date(this.startDate) : null,
      completeDate: this.completeDate ? new Date(this.completeDate) : null,
      interruptDate: this.interruptDate ? new Date(this.interruptDate) : null,
    });

    return newCycleModel;
  }
}
