import { useNavigate } from "react-router";

export const useRouter = () => {
  const navigate = useNavigate();

  const redirectTo = (path: string) => {
    navigate(path);
  };

  return {
    redirectTo,
  };
};
