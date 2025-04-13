import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { Menu } from "../../layouts/Menu";

type MainTemplateProps = {
  children?: React.ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
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
