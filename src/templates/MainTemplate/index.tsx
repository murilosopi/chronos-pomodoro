import { useEffect } from "react";
import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { useCyclesContext } from "../../contexts/CyclesContext/useCyclesContext";
import { Menu } from "../../layouts/Menu";
import { useRouter } from "../../adapters/router/hook";
import { formatSecondsToTime } from "../../utils/formatSecondsToTime";

type MainTemplateProps = {
  children?: React.ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  const {
    state: { secondsRemaining },
  } = useCyclesContext();
  const { getCurrentRoute } = useRouter();

  const route = getCurrentRoute();

  useEffect(() => {
    document.title = secondsRemaining
      ? [formatSecondsToTime(secondsRemaining), route.title].join(" - ")
      : route.title;
  }, [route, secondsRemaining]);

  return (
    <>
      <header>
        <Container>
          <Logo />
          <Menu />
        </Container>
      </header>

      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};
