import { Button } from "../../components/Button";
import { PlayCircle } from "lucide-react";
import { Input } from "../../components/Input";
import { formTaskLabel, formTaskPlaceholder } from "../../constants/form";
import styles from "./CycleManager.module.css";
import { CyclesHistory } from "../../components/CyclesHistory";
import { Cycle } from "../../types/classes/Cycle";
import { useState } from "react";

type CycleManagerProps = {
  cycles?: Cycle[];
};

export const CycleManager = ({
  cycles = [],
}: CycleManagerProps) => {
  const [taskName, setTaskName] = useState("");

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className={styles["cycle-manager"]}>
      {!!cycles.length && <CyclesHistory cycles={cycles} />}

      <Input
        label={formTaskLabel}
        placeholder={formTaskPlaceholder}
        value={taskName}
        onChange={(e) => {
          setTaskName(e.currentTarget.value);
        }}
      />

      <Button>
        <PlayCircle />
      </Button>
    </form>
  );
};
