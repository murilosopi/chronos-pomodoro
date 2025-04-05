import { TimerIcon } from "lucide-react";
import styles from "./Logo.module.css";

export const Logo = () => (
  <div className={styles.logo}>
    <TimerIcon size={60} />
    <span className={styles.logo__text}>Chronos</span>
  </div>
);
