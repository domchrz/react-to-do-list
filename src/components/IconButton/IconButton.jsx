import styles from './IconButton.module.scss';

export default function IconButton({ icon, handleClick, fontSize = '1.5rem' }) {
  return (
    <>
      <button className={styles.btn} onClick={handleClick}>
        <i className="material-icons" style={{ fontSize }}>
          {icon}
        </i>
      </button>
    </>
  );
}
