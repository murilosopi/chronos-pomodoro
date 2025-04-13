import { useId } from "react";
import styles from "./Input.module.css";

type InputProps = {
  label?: React.ReactNode;
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>;
} & React.ComponentProps<"input">;

export const Input = ({ label = "", onEnter, ...props }: InputProps) => {
  const id = useId();

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") onEnter?.(e);

    props.onKeyDown?.(e);
  };

  return (
    <div className={styles.input}>
      {!!label && <label htmlFor={id}>{label}</label>}
      <input
        {...props}
        id={id}
        className={`${props.className} ${styles.input__field}`}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};
