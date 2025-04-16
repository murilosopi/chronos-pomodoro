import { CyclesStateModel } from "../models/CyclesStateModel";
import { CycleService } from "../services/CycleService";

let isRunning = false;
self.onmessage = (event: MessageEvent<CyclesStateModel>) => {
  if (isRunning) return;

  isRunning = true;

  const { activeCycles, secondsRemaining } = event.data;

  const cycle = CycleService.getLastCycle(activeCycles);

  if (!cycle) {
    self.close();
    return;
  }

  const endDate = cycle.startDate.getTime() + secondsRemaining * 1000;

  const tick = () => {
    const now = Date.now();
    const countDownSeconds = Math.max(0, Math.ceil((endDate - now) / 1000));

    self.postMessage(countDownSeconds);

    if (countDownSeconds <= 0) {
      self.close();
    }

    setTimeout(tick, 1000);
  };

  tick();
};
