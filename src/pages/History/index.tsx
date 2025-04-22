import { Trash } from "lucide-react";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { Table } from "../../components/Table";
import styles from "./History.module.css";
import { useCyclesContext } from "../../contexts/CyclesContext/useCyclesContext";
import { formatMilisecondsToTime } from "../../utils/formatMilisecondsToTime";
import {
  cycleStatusDescription,
  cycleTitlesByType,
} from "../../constants/cycle";
import { useMemo } from "react";
import { CycleModel } from "../../models/CycleModel";
import { notify } from "../../adapters/notify";
import { historyClearedMessage } from "../../constants/statics";

export const History = () => {
  const {
    state: { cycles },
    clearCyclesHistory,
  } = useCyclesContext();

  const tableColumns = [
    { label: "Tarefa", key: "taskName" },
    { label: "Tipo", key: "cycleType" },
    { label: "Data", key: "startDate" },
    { label: "Status", key: "status" },
    { label: "Duração", key: "duration" },
  ];

  const mapCyclesToTableData = (cycles: CycleModel[]) => {
    return [...cycles]
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
      .map((cycle) => ({
        taskName: cycle.taskName,
        cycleType: cycleTitlesByType[cycle.type],
        startDate: cycle.startDate.toLocaleString(),
        status: cycleStatusDescription[cycle.status()],
        duration: formatMilisecondsToTime(
          (cycle.completeDate || cycle.interruptDate || new Date()).getTime() -
            cycle.startDate.getTime()
        ),
      }));
  };

  const data = useMemo(() => mapCyclesToTableData(cycles), [cycles]);

  return (
    <MainTemplate>
      <header className={styles.history_header}>
        <Heading>History</Heading>
        <Button
          variant="danger"
          onClick={() => {
            clearCyclesHistory();
            notify.success(historyClearedMessage);
          }}
        >
          <Trash />
        </Button>
      </header>
      <Table columns={tableColumns} data={data} />
    </MainTemplate>
  );
};
