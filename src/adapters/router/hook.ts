import { useLocation, useNavigate } from "react-router";
import { Route, routes } from "../../constants/routes";

export const useRouter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const redirectTo = (route: Route) => {
    navigate(route.path);
  };

  const getCurrentPath = (): string => {
    return pathname;
  };

  const getCurrentRoute = () => {
    return (
      Object.values(routes).find((route) => route.path == pathname) ||
      routes.notFound
    );
  };

  return {
    redirectTo,
    getCurrentPath,
    getCurrentRoute,
  };
};
