import { CycleModel } from "../../models/CycleModel";
import { Cycle as CycleComponent } from "../Cycle";
import styles from "./CyclesHistory.module.css";
import { cyclesHistoryTitle } from "../../constants/cycle";

type CyclesHistoryProps = {
  cycles?: CycleModel[];
};

export const CyclesHistory = ({ cycles = [] }: CyclesHistoryProps) => {
  return (
    <div className={styles.cycles_history}>
      <p>{cyclesHistoryTitle}</p>

      <ol className={styles.cycles_history__list}>
        {cycles.map((c) => (
          <CycleComponent key={`${c.id}_${c.type}`} type={c.type} />
        ))}
      </ol>
    </div>
  );
};
