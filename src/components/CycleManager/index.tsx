import { Button } from "../Button";
import { PlayCircle } from "lucide-react";
import { Input } from "../Input";
import { formTaskLabel, formTaskPlaceholder } from "../../constants/form";
import styles from "./CycleManager.module.css";
import { CyclesHistory } from "../CyclesHistory";
import { CycleModel } from "../../models/CycleModel";
import { useRef } from "react";
import { useCyclesContext } from "../../hooks/useCyclesContext";

export const CycleManager = () => {
  const { state, addCycle } = useCyclesContext();

  const taskNameInput = useRef<HTMLInputElement>(null);

  const handleStartNewCycle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) {
      alert("tá vazio aí, vagabundo!");
    }

    const newCycle = new CycleModel({ taskName, type: state.nextCycleType() });

    addCycle(newCycle);
  };

  return (
    <form onSubmit={handleStartNewCycle} className={styles["cycle-manager"]}>
      {!!state.activeCycles.length && (
        <CyclesHistory cycles={state.activeCycles} />
      )}

      <Input
        label={formTaskLabel}
        placeholder={formTaskPlaceholder}
        ref={taskNameInput}
      />

      <Button>
        <PlayCircle />
      </Button>
    </form>
  );
};
