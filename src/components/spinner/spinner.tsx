import styles from './spinner.module.css';

export const Spinner = () => (
  <div className={styles.overlay}>
    <div className={styles.spinner} />
  </div>
);
