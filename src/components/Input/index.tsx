import { useId, useRef } from "react";
import styles from "./Input.module.css";

type InputProps = {
  type?: string;
  placeholder?: string;
  label?: string;
};

export const Input = ({
  type = "text",
  placeholder = "",
  label = "",
}: InputProps) => {
  const id = useRef(useId());

  return (
    <>
      {!!label && <label htmlFor={id.current}>{label}</label>}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        id={id.current}
      />
    </>
  );
};
