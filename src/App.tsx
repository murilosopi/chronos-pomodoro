import { CyclesContextProvider } from "./contexts/CyclesContext/provider";
import { Home } from "./pages/Home";
import "./styles/global.css";
import "./styles/theme.css";
import { NotificationContainer } from "./components/NotificationContainer";

export const App = () => {
  return (
    <CyclesContextProvider>
      <Home />

      <NotificationContainer />
    </CyclesContextProvider>
  );
};
