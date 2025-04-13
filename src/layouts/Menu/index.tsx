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
import { Themes } from "../../types/enums/Themes";
import { useTheme } from "../../hooks/useTheme";

export const Menu = () => {
  const { currentTheme, changeTheme } = useTheme();

  return (
    <nav className={styles.menu}>
      <Button title={menuTitles.home} aria-label={menuTitles.home}>
        <HomeIcon />
      </Button>

      <Button title={menuTitles.history} aria-label={menuTitles.history}>
        <HistoryIcon />
      </Button>

      <Button title={menuTitles.settings} aria-label={menuTitles.settings}>
        <SettingsIcon />
      </Button>

      <Button
        title={menuTitles.theme[currentTheme]}
        aria-label={menuTitles.theme[currentTheme]}
        onClick={changeTheme}
      >
        {currentTheme === Themes.Dark ? <SunIcon /> : <MoonIcon />}
      </Button>

      <Button title={menuTitles.info} aria-label={menuTitles.info}>
        <InfoIcon />
      </Button>
    </nav>
  );
};
