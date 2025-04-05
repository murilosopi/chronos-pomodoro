import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  title?: string;
  onClick?: (e: React.MouseEvent) => void | undefined;
};

export const Button = ({ children = "", title = "", onClick }: ButtonProps) => (
  <button title={title} className={styles.button} onClick={onClick}>
    {children}
  </button>
);
