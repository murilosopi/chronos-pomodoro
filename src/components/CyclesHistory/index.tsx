import { Cycle } from "../../types/classes/Cycle";
import { Cycle as CycleComponent } from "../Cycle";
import styles from "./CyclesHistory.module.css";
import {
  cyclesHistoryTitle,
} from "../../constants/cycle";

type CyclesHistoryProps = {
  cycles?: Cycle[];
};

export const CyclesHistory = ({
  cycles = [],
}: CyclesHistoryProps) => {
  return (
    <div className={styles.cycles_history}>
      <p>{cyclesHistoryTitle}</p>

      <ol className={styles.cycles_history__list}>
        {cycles.map((c, index) => (
          <CycleComponent key={index} type={c.type} />
        ))}
      </ol>
    </div>
  );
};
