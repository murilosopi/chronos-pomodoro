import { Input } from "../../../../components/Input";
import { timeFieldLabels } from "../../../../constants/settings";
import { useCyclesContext } from "../../../../contexts/CyclesContext/useCyclesContext";
import { allCycleTypes, CycleTypes } from "../../../../enums/CycleTypes";
import styles from "./FormSettings.module.css";

export const FormSettings = () => {
  const {
    state: { timeConfig: currentTimeConfig },
    updateTimeConfig,
  } = useCyclesContext();

  const handleChange = (value: string, type: CycleTypes) => {
    const timeInSeconds = (Number(value) || 0) * 60;

    if (timeInSeconds > 0) updateTimeConfig(type, timeInSeconds);
  };
  return (
    <form className={styles.form_settings}>
      {allCycleTypes.map((type) => (
        <Input
          type="number"
          min={1}
          label={timeFieldLabels[type]}
          value={currentTimeConfig[type] / 60}
          onChange={(e) => handleChange(e.currentTarget.value, type)}
          key={type}
        />
      ))}
    </form>
  );
};
