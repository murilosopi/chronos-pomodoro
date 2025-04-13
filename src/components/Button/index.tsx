import React from "react";
import styles from "./Button.module.css";

type ButtonProps = React.ComponentProps<"button">;

export const Button = ({ className = "", children, ...props }: ButtonProps) => (
  <button {...props} className={`${className} ${styles.button}`}>
    {children}
  </button>
);
