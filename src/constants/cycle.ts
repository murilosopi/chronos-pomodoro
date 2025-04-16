import { CycleTypes } from "../enums/CycleTypes";

export const cyclesHistoryTitle = "Ciclos:";

export const cycleTitlesByType: Record<CycleTypes, string> = {
  [CycleTypes.Focus]: "Ciclo de trabalho",
  [CycleTypes.Rest]: "Ciclo de descanso",
  [CycleTypes.Break]: "Ciclo de descanso",
} as const;
