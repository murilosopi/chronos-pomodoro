import { useId, useRef } from "react";
import styles from "./Input.module.css";

type InputProps = {
  type?: string;
  placeholder?: string;
  label?: string;
  name?: string;
  onEnter?: React.KeyboardEventHandler;
  onChange?: React.ChangeEventHandler;
};

export const Input = ({
  type = "text",
  placeholder = "",
  label = "",
  name = "",
  onEnter = () => {},
  onChange = () => {},
}: InputProps) => {
  const id = useRef(useId());

  const keyDownHandler = (e: React.KeyboardEvent) => {
    return e.key == "Enter" && onEnter(e);
  };

  return (
    <>
      {!!label && <label htmlFor={id.current}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id.current}
        className={styles.input}
        onKeyDown={keyDownHandler}
        onChange={onChange}
      />
    </>
  );
};
