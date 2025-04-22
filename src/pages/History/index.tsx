import { Trash } from "lucide-react";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import styles from "./History.module.css";
import { useCyclesContext } from "../../contexts/CyclesContext/useCyclesContext";
import { notify } from "../../adapters/notify";
import { historyClearedMessage } from "../../constants/statics";
import { TableCycle } from "./components/TableCycles";

export const History = () => {
  const { clearCyclesHistory } = useCyclesContext();

  return (
    <MainTemplate>
      <header className={styles.history_header}>
        <Heading>Histórico</Heading>
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
      <TableCycle />
    </MainTemplate>
  );
};
