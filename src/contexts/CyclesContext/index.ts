import { createContext } from "react";
import { CyclesStateModel } from "../../models/CyclesStateModel";
import { initialCyclesState } from "../../constants/initialCyclesState";

type CyclesContextProps = {
  state: CyclesStateModel;
  setState: React.Dispatch<React.SetStateAction<CyclesStateModel>>;
};

export const CyclesContext = createContext<CyclesContextProps>({
  state: initialCyclesState,
  setState: () => {},
});
