import { CycleTypes } from "../types/enums/CycleType";

export const cycles: Record<
  CycleTypes,
  {
    title: string;
    description: {
      next: string;
      running: string;
    };
    minutesDuration: number;
  }
> = {
  [CycleTypes.Focus]: {
    title: "Ciclo de trabalho",
    description: {
      next: "Nesse ciclo **foque** por **25 min**",
      running: "Fique **em foco**",
    },
    minutesDuration: 25,
  },
  [CycleTypes.Rest]: {
    title: "Ciclo de descanso",
    description: {
      next: "Nesse ciclo **descanse** por 5 min.",
      running: "**Descanse**",
    },
    minutesDuration: 5,
  },
  [CycleTypes.Break]: {
    title: "Ciclo de descanso",
    description: {
      next: "Nesse ciclo **descanse** por 15 min.",
      running: "**Descanse**",
    },
    minutesDuration: 15,
  },
} as const;
