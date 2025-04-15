import { createContext } from "react";
import { CyclesStateModel } from "../../models/CyclesStateModel";
import { initialCyclesState } from "../../constants/initialCyclesState";
import { CycleActionModel } from "./actions";

type CyclesContextProps = {
  state: CyclesStateModel;
  dispatch: React.ActionDispatch<[action: CycleActionModel]>;
};

export const CyclesContext = createContext<CyclesContextProps>({
  state: initialCyclesState,
  dispatch: () => {},
});
