import { Button } from "../Button";
import { PlayCircle, StopCircle } from "lucide-react";
import { Input } from "../Input";
import { formTaskLabel, formTaskPlaceholder } from "../../constants/form";
import styles from "./CycleManager.module.css";
import { CyclesHistory } from "../CyclesHistory";
import { CycleModel } from "../../models/CycleModel";
import React, { useEffect, useRef } from "react";
import { CycleService } from "../../services/CycleService";
import {
  cancelCycleQuestion,
  emptyTaskNameWarning,
} from "../../constants/statics";
import { useCyclesContext } from "../../contexts/CyclesContext/useCyclesContext";
import { CyclesTip } from "../CyclesTip";
import { loadBeep } from "../../utils/loadBeep";
import { notify } from "../../adapters/notify";

export const CycleManager = () => {
  const { state, startNewCycle, interruptLastCycle } = useCyclesContext();

  const currentCycle = CycleService.getLastCycle(state.activeCycles);
  const hasCycleRunning = CycleService.hasRunningCycle(state.activeCycles);

  const taskNameInput = useRef<HTMLInputElement>(null);
  const completeAudioRef = useRef<ReturnType<typeof loadBeep>>(null);

  const handleCycleStartPause = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!hasCycleRunning) {
      if (taskNameInput.current === null) return;

      completeAudioRef.current = loadBeep();

      const taskName = taskNameInput.current?.value.trim();

      if (!taskName) {
        notify.warning(emptyTaskNameWarning);
        return;
      }

      startNewCycle(
        new CycleModel({
          taskName,
          type: CycleService.getNextType(state.activeCycles),
        })
      );
      return;
    }

    const cancelCycle = confirm(cancelCycleQuestion);

    if (cancelCycle) {
      interruptLastCycle();
    }
  };

  useEffect(() => {
    if (!currentCycle?.completeDate || !completeAudioRef.current) return;

    completeAudioRef.current();
  }, [currentCycle?.completeDate]);

  return (
    <form onSubmit={handleCycleStartPause} className={styles["cycle-manager"]}>
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
