import styles from "./Cycle.module.css";
import { cycleTypesDefinitions } from "../../constants/cycle";
import { CycleTypes } from "../../types/enums/CycleType";

type CycleProps = {
  type: CycleTypes;
};

export const Cycle = ({ type }: CycleProps) => {
  const title = cycleTypesDefinitions[type].title;
  const variant = styles[`cycle--${type}"`];

  return <span className={`${styles.cycle} ${variant}`} title={title} />;
};
