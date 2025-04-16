import styles from "./CyclesTip.module.css";
import { useCyclesContext } from "../../contexts/CyclesContext/useCyclesContext";
import { CycleTypes } from "../../enums/CycleTypes";
import { CycleService } from "../../services/CycleService";
import { secondsToMinutes } from "../../utils/secondsToMinutes";
import { boldify } from "../../utils/boldify";

export const CyclesTip = () => {
  const {
    state: { timeConfig, activeCycles },
  } = useCyclesContext();

  type CycleTips = {
    [key in CycleTypes]: string;
  };

  const notStartedCycleTips: CycleTips = {
    [CycleTypes.Focus]: `Nesse ciclo **foque** por **${secondsToMinutes(
      timeConfig[CycleTypes.Focus]
    )}** min.`,
    [CycleTypes.Rest]: `Nesse ciclo **descanse** por **${secondsToMinutes(
      timeConfig[CycleTypes.Rest]
    )}** min.`,
    [CycleTypes.Break]: `Nesse ciclo **descanse** por **${secondsToMinutes(
      timeConfig[CycleTypes.Break]
    )}** min.`,
  };

  const runningCycleTips: CycleTips = {
    [CycleTypes.Focus]: "**Fique em foco**",
    [CycleTypes.Rest]: "**Descanse**",
    [CycleTypes.Break]: "**Descanse**",
  };

  const cycleTipText = CycleService.hasRunningCycle(activeCycles)
    ? runningCycleTips[
        CycleService.getLastCycle(activeCycles)?.type || CycleTypes.Focus
      ]
    : notStartedCycleTips[CycleService.getNextType(activeCycles)];

  return <p className={styles.cycles_tip}>{boldify(cycleTipText)}</p>;
};
