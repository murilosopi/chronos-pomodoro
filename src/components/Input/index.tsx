import { useId, useRef } from "react";
import styles from "./Input.module.css";

type InputProps = {
  type?: string;
  placeholder?: string;
  label?: string;
  onEnter?: React.KeyboardEventHandler;
};

export const Input = ({
  type = "text",
  placeholder = "",
  label = "",
  onEnter = () => {},
}: InputProps) => {
  const id = useRef(useId());

  const keyDownHandler = (e: React.KeyboardEvent) => {
    return e.key == "Enter" && onEnter(e);
  };

  return (
    <>
      {!!label && <label htmlFor={id.current}>{label}</label>}
      <input
        className={styles.input}
        onKeyDown={keyDownHandler}
        type={type}
        placeholder={placeholder}
        id={id.current}
      />
    </>
  );
};
