import { Bounce, ToastContainer } from "react-toastify";
import { CyclesContextProvider } from "./contexts/CyclesContext/provider";
import { Home } from "./pages/Home";
import "./styles/global.css";
import "./styles/theme.css";

export const App = () => {
  return (
    <CyclesContextProvider>
      <Home />

      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </CyclesContextProvider>
  );
};
