import {
  HistoryIcon,
  HomeIcon,
  InfoIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { Button } from "../../components/Button";
import styles from "./Menu.module.css";
import { menuTitles } from "../../constants/menu";
import { Themes } from "../../enums/Themes";
import { useTheme } from "../../hooks/useTheme";
import { useRouter } from "../../adapters/router/hook";
import { routes } from "../../constants/routes";

export const Menu = () => {
  const { currentTheme, changeTheme } = useTheme();
  const { redirectTo } = useRouter();

  return (
    <nav className={styles.menu}>
      <Button
        title={menuTitles.home}
        aria-label={menuTitles.home}
        role="link"
        onClick={() => redirectTo(routes.home)}
      >
        <HomeIcon />
      </Button>

      <Button
        title={menuTitles.history}
        aria-label={menuTitles.history}
        role="link"
        onClick={() => redirectTo(routes.history)}
      >
        <HistoryIcon />
      </Button>

      <Button
        title={menuTitles.settings}
        aria-label={menuTitles.settings}
        role="link"
        onClick={() => redirectTo(routes.settings)}
      >
        <SettingsIcon />
      </Button>

      <Button
        title={menuTitles.theme[currentTheme]}
        aria-label={menuTitles.theme[currentTheme]}
        onClick={changeTheme}
      >
        {currentTheme === Themes.Dark ? <SunIcon /> : <MoonIcon />}
      </Button>

      <Button
        title={menuTitles.info}
        aria-label={menuTitles.info}
        role="link"
        onClick={() => redirectTo(routes.aboutPomodoro)}
      >
        <InfoIcon />
      </Button>
    </nav>
  );
};
