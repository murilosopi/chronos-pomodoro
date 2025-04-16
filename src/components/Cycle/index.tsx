import styles from "./Cycle.module.css";
import { CycleTypes } from "../../enums/CycleTypes";
import { cycleTitlesByType } from "../../constants/cycle";

type CycleProps = {
  type: CycleTypes;
};

export const Cycle = ({ type }: CycleProps) => {
  const title = cycleTitlesByType[type];
  const variant = styles[`cycle--${type}`];

  return <span className={`${styles.cycle} ${variant}`} title={title} />;
};
