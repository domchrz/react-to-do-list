import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

export default function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.body
  );
}
