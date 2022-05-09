import IconButton from '../IconButton';
import styles from './ErrorMessage.module.scss';

export default function ErrorMessage({ message, handleClick }) {
  return (
    <div className={styles.error}>
      <h3>Error</h3>
      <p>{message}</p>
      <IconButton
        icon="cancel"
        fontSize="2rem"
        handleClick={handleClick}></IconButton>
    </div>
  );
}
