import { BrowserRouter, Routes, Route, Link } from "react-router";
import { NotFound } from "../../pages/NotFound";
import { Home } from "../../pages/Home";
import { routes } from "../../constants/routes";
import { AboutPomodoro } from "../../pages/AboutPomodoro";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} Component={Home} />
        <Route path={routes.aboutPomodoro} Component={AboutPomodoro} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

type RouterLinkProps = { to: string; children: React.ReactNode };
export const RouterLink = ({ to, children }: RouterLinkProps) => {
  return <Link to={to}>{children}</Link>;
};
