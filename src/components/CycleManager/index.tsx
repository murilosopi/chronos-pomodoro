import { Button } from "../Button";
import { PlayCircle } from "lucide-react";
import { Input } from "../Input";
import { formTaskLabel, formTaskPlaceholder } from "../../constants/form";
import styles from "./CycleManager.module.css";
import { CyclesHistory } from "../CyclesHistory";
import { CycleModel } from "../../models/CycleModel";
import React, { useRef } from "react";
import { useCyclesContext } from "../../hooks/useCyclesContext";
import { boldify } from "../../utils/boldify";
import { CycleService } from "../../services/CycleService";

export const CycleManager = () => {
  const { state, addCycle } = useCyclesContext();

  const hasCycleRunning = CycleService.hasRunningCycle(state.activeCycles);

  const cycleDescription = boldify(
    CycleService.getCurrentDescription(state.activeCycles)
  );

  const taskNameInput = useRef<HTMLInputElement>(null);

  const handleStartNewCycle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) {
      return;
    }

    addCycle(
      new CycleModel({
        taskName,
        type: CycleService.getNextType(state.activeCycles),
      })
    );
  };

  return (
    <form onSubmit={handleStartNewCycle} className={styles["cycle-manager"]}>
      <p className={styles.description}>{cycleDescription}</p>

      {!!state.activeCycles.length && (
        <CyclesHistory cycles={state.activeCycles} />
      )}

      <Input
        disabled={hasCycleRunning}
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
