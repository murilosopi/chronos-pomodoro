import { CyclesStateModel } from "../models/CyclesStateModel";

let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL("./timerWorker.ts", import.meta.url), {
      type: "module",
    });
  }

  static getInstance() {
    if (!instance) {
      instance = new TimerWorkerManager();
      console.log("[timer-worker-manager] new timer worker instance");
    }

    return instance;
  }

  postState(message: CyclesStateModel) {
    this.worker.postMessage(message);
  }

  listenTimerTick(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminate() {
    this.worker.terminate();
    instance = null;

    console.log("[timer-worker-manager] timer worker instance terminated");
  }
}
