import { CycleTypes } from "../types/enums/CycleType";

export const cyclesHistoryTitle = "Ciclos:";

export const cycleTypesDefinitions: Record<
  CycleTypes,
  {
    title: string;
    description: {
      notStarted: string;
      running: string;
    };
    minutesDuration: number;
  }
> = {
  [CycleTypes.Focus]: {
    title: "Ciclo de trabalho",
    description: {
      notStarted: "Nesse ciclo **foque** por **25 min**",
      running: "Fique **em foco**",
    },
    minutesDuration: 25,
  },
  [CycleTypes.Rest]: {
    title: "Ciclo de descanso",
    description: {
      notStarted: "Nesse ciclo **descanse** por 5 min.",
      running: "**Descanse**",
    },
    minutesDuration: 5,
  },
  [CycleTypes.Break]: {
    title: "Ciclo de descanso",
    description: {
      notStarted: "Nesse ciclo **descanse** por 15 min.",
      running: "**Descanse**",
    },
    minutesDuration: 15,
  },
} as const;
