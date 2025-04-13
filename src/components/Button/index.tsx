import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  variant?: "primary" | "danger";
} & React.ComponentProps<"button">;

export const Button = ({
  className = "",
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const variantStyle = styles[`button--${variant}`];
  return (
    <button
      {...props}
      className={`${className} ${styles.button} ${variantStyle}`}
    >
      {children}
    </button>
  );
};
