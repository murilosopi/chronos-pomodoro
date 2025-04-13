import {
  HistoryIcon,
  HomeIcon,
  InfoIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { Button } from "../../components/Button";
import styles from "./Menu.module.css";
import { menuTitles } from "../../constants/menu";

export const Menu = () => (
  <nav className={styles.menu}>
    <Button title={menuTitles.home}>
      <HomeIcon />
    </Button>

    <Button title={menuTitles.history}>
      <HistoryIcon />
    </Button>

    <Button title={menuTitles.settings}>
      <SettingsIcon />
    </Button>

    <Button title={menuTitles.theme.dark}>
      <SunIcon />
    </Button>

    <Button title={menuTitles.info}>
      <InfoIcon />
    </Button>
  </nav>
);
