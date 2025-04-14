import { useCyclesContext } from "../../hooks/useCyclesContext";
import styles from "./Timer.module.css";
import { formatSecondsToTime } from "../../utils/formatSecondsToTime";

export const Timer = () => {
  const { state } = useCyclesContext();

  const formattedTime = formatSecondsToTime(state?.secondsRemaining ?? 0);

  return <span className={styles.timer}>{formattedTime}</span>;
};
