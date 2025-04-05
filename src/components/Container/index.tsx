import styles from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);
