import styles from "./GenericHtml.module.css";

type GenericHtmlProps = {
  children: React.ReactNode;
};

export const GenericHtml = ({ children }: GenericHtmlProps) => (
  <div className={styles.genericHtml}>{children}</div>
);
