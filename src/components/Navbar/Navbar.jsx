import styles from './Navbar.module.scss';

export default function Navbar({ children }) {
  return (
    <nav className={styles.navbar}>
      {children}
    </nav>
  );
}
