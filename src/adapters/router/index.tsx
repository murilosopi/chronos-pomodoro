import { BrowserRouter, Routes, Route, Link } from "react-router";
import { NotFound } from "../../pages/NotFound";
import { Home } from "../../pages/Home";
import { Route as RouteType, routes } from "../../constants/routes";
import { AboutPomodoro } from "../../pages/AboutPomodoro";
import { useEffect } from "react";
import { useRouter } from "./hook";

const RouterRoutes = () => {
  const { getCurrentRoute } = useRouter();

  const route = getCurrentRoute();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    document.title = route.title;
  }, [route]);

  return (
    <Routes>
      <Route path={routes.home.path} Component={Home} />
      <Route path={routes.aboutPomodoro.path} Component={AboutPomodoro} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <RouterRoutes />
    </BrowserRouter>
  );
};

type RouterLinkProps = { to: RouteType; children: React.ReactNode };
export const RouterLink = ({ to: { path }, children }: RouterLinkProps) => {
  return <Link to={path}>{children}</Link>;
};
