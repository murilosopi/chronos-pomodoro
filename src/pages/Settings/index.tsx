import styles from "./Settings.module.css";
import { Heading } from "../../components/Heading";
import { settingsTip } from "../../constants/settings";
import { MainTemplate } from "../../templates/MainTemplate";
import { FormSettings } from "./components/FormSettings";
export const Settings = () => {
  return (
    <MainTemplate>
      <div className={styles.settings}>
        <Heading>Ajustes</Heading>
        <p>{settingsTip}</p>
        <FormSettings />
      </div>
    </MainTemplate>
  );
};
