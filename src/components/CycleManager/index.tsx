import { Button } from "../Button";
import { PlayCircle, StopCircle } from "lucide-react";
import { Input } from "../Input";
import { formTaskLabel, formTaskPlaceholder } from "../../constants/form";
import styles from "./CycleManager.module.css";
import { CyclesHistory } from "../CyclesHistory";
import { CycleModel } from "../../models/CycleModel";
import React, { useRef } from "react";
import { CycleService } from "../../services/CycleService";
import { cancelCycleQuestion } from "../../constants/statics";
import { useCyclesContext } from "../../contexts/CyclesContext/useCyclesContext";
import { CyclesTip } from "../CyclesTip";

export const CycleManager = () => {
  const { state, startNewCycle, interruptLastCycle } = useCyclesContext();

  const hasCycleRunning = CycleService.hasRunningCycle(state.activeCycles);
  const taskNameInput = useRef<HTMLInputElement>(null);

  const addCycleToState = () => {
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) {
      return;
    }

    startNewCycle(
      new CycleModel({
        taskName,
        type: CycleService.getNextType(state.activeCycles),
      })
    );
  };

  const handleStartNewCycle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addCycleToState();
  };

  const handleCycleStartPause = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!hasCycleRunning) {
      addCycleToState();
      return;
    }

    const cancelCycle = confirm(cancelCycleQuestion);

    if (cancelCycle) {
      interruptLastCycle();
    }
  };

  return (
    <form onSubmit={handleStartNewCycle} className={styles["cycle-manager"]}>
      <CyclesTip />

      {!!state.activeCycles.length && (
        <CyclesHistory cycles={state.activeCycles} />
      )}

      <Input
        disabled={hasCycleRunning}
        label={formTaskLabel}
        placeholder={formTaskPlaceholder}
        ref={taskNameInput}
      />

      <Button
        variant={hasCycleRunning ? "danger" : "primary"}
        onClick={handleCycleStartPause}
      >
        {hasCycleRunning ? <StopCircle /> : <PlayCircle />}
      </Button>
    </form>
  );
};
