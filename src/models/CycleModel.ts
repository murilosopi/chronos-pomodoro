import { v4 as uuidv4 } from "uuid";
import { CycleTypes } from "../enums/CycleTypes";

type CycleModelConstructorProps = {
  taskName: string;
  id?: string;
  type: CycleTypes;
  startDate?: Date;
  completeDate?: Date | null;
  interruptDate?: Date | null;
};

export class CycleModel {
  taskName: string;
  id: string;
  type: CycleTypes;
  startDate: Date;
  completeDate: Date | null;
  interruptDate: Date | null;

  constructor({
    type,
    taskName,
    id = uuidv4(),
    startDate = new Date(),
    completeDate = null,
    interruptDate = null,
  }: CycleModelConstructorProps) {
    this.id = id;
    this.type = type;
    this.taskName = taskName;
    this.startDate = startDate;
    this.completeDate = completeDate;
    this.interruptDate = interruptDate;
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
