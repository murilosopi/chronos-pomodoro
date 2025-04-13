import { CycleManager } from "../../components/CycleManager";
import { Timer } from "../../components/Timer";
import { MainTemplate } from "../../templates/MainTemplate";

export const Home = () => {
  return (
    <MainTemplate>
      <Timer />
      <CycleManager />
    </MainTemplate>
  );
};
