import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  title?: string;
};

export const Button = ({ children = "", title = "" }: ButtonProps) => (
  <button title={title} className={styles.button}>
    {children}
  </button>
);
