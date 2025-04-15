import styles from "./Timer.module.css";
import { formatSecondsToTime } from "../../utils/formatSecondsToTime";
import { useCyclesContext } from "../../contexts/CyclesContext/useCyclesContext";

export const Timer = () => {
  const { state } = useCyclesContext();

  const formattedTime = formatSecondsToTime(state?.secondsRemaining ?? 0);

  return <span className={styles.timer}>{formattedTime}</span>;
};
