import { v4 as uuidv4 } from "uuid";
import { CycleTypes } from "../enums/CycleTypes";
import { CycleStatus } from "../enums/CycleStatus";

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

  status(): CycleStatus {
    if (this.completed()) return CycleStatus.Completed;
    if (this.interrupted()) return CycleStatus.Interrupted;

    return CycleStatus.Running;
  }

  clone(): CycleModel {
    return new CycleModel({
      id: this.id,
      taskName: this.taskName,
      type: this.type,
      startDate: this.startDate ? new Date(this.startDate) : new Date(),
      completeDate: this.completeDate ? new Date(this.completeDate) : null,
      interruptDate: this.interruptDate ? new Date(this.interruptDate) : null,
    });
  }
}
