import styles from './TaskInput.module.scss';

export default function TaskInput({ handleChange, value }) {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}
