import styles from "./Cycle.module.css";
import { cycles } from "../../constants/cycle";
import { CycleTypes } from "../../types/enums/CycleType";

type CycleProps = {
  type: CycleTypes;
};

export const Cycle = ({ type }: CycleProps) => {
  const title = cycles[type].title;

  const variantByType = {
    [CycleTypes.Rest]: styles["cycle--rest"],
    [CycleTypes.Break]: styles["cycle--break"],
    [CycleTypes.Focus]: styles["cycle--focus"],
  };

  return (
    <span className={`${styles.cycle} ${variantByType[type]}`} title={title} />
  );
};
