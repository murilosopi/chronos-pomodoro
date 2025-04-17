import { CyclesContextProvider } from "./contexts/CyclesContext/provider";
import "./styles/global.css";
import "./styles/theme.css";
import { NotificationContainer } from "./components/NotificationContainer";
import { Router } from "./adapters/router";

export const App = () => {
  return (
    <CyclesContextProvider>
      <Router />

      <NotificationContainer />
    </CyclesContextProvider>
  );
};
