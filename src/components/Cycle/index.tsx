import styles from "./Cycle.module.css";
import { cycleTypesDefinitions } from "../../constants/cycle";
import { CycleTypes } from "../../types/enums/CycleType";

type CycleProps = {
  type: CycleTypes;
};

export const Cycle = ({ type }: CycleProps) => {
  const title = cycleTypesDefinitions[type].title;

  const variantByType = {
    [CycleTypes.Rest]: styles["cycle--rest"],
    [CycleTypes.Break]: styles["cycle--break"],
    [CycleTypes.Focus]: styles["cycle--focus"],
  };

  return (
    <span className={`${styles.cycle} ${variantByType[type]}`} title={title} />
  );
};
