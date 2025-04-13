import { Themes } from "../types/enums/Themes";

export const menuTitles = {
  home: "Página Inicial",
  history: "Histórico de Tarefas",
  settings: "Ajustes",
  theme: {
    [Themes.Dark]: "Mudar para Tema Claro",
    [Themes.Light]: "Mudar para Tema Escuro",
  },
  info: "Sobre a Técnica Pomodoro",
};