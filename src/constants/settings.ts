import { CycleTypes } from "../enums/CycleTypes";
import { cycleTitlesByType } from "./cycle";

export const settingsTip = "Configure os minutes para etapas do Pomodoro";

export const timeFieldLabels: Record<CycleTypes, string> = {
  [CycleTypes.Focus]: `${cycleTitlesByType[CycleTypes.Focus]} (min)`,
  [CycleTypes.Rest]: `${cycleTitlesByType[CycleTypes.Rest]} (min)`,
  [CycleTypes.Break]: `${cycleTitlesByType[CycleTypes.Break]} (min)`,
} as const;
