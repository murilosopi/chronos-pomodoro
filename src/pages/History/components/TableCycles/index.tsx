import { useMemo } from "react";
import {
  cycleTitlesByType,
  cycleStatusDescription,
} from "../../../../constants/cycle";
import { useCyclesContext } from "../../../../contexts/CyclesContext/useCyclesContext";
import { CycleModel } from "../../../../models/CycleModel";
import { formatMilisecondsToTime } from "../../../../utils/formatMilisecondsToTime";
import { Table } from "../../../../components/Table";

export const TableCycle = () => {
  const {
    state: { cycles },
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
      .sort((a, b) => (b?.startDate.getTime() || 0) - a.startDate.getTime())
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

  return <Table columns={tableColumns} data={data} />;
};
