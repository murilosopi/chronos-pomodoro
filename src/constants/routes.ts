export type Route = {
  path: string;
  title: string;
};

export const routes: Record<string, Route> = {
  home: { path: "/", title: "Chronos Pomodoro" },
  history: { path: "/history", title: "Histórico" },
  settings: { path: "/settings", title: "Ajustes" },
  aboutPomodoro: { path: "/about-pomodoro", title: "A Técnica Pomodoro" },
  notFound: { path: "*", title: "Página Não Encontrada" },
} as const;
