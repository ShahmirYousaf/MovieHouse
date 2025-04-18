// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/MovieHouse.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/" passHref>
            <a className={styles.navItem}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/genres" passHref>
            <a className={styles.navItem}>Genres</a>
          </Link>
        </li>
        <li>
          <Link href="/directors" passHref>
            <a className={styles.navItem}>Directors</a>
          </Link>
        </li>
        <li>
          <Link href="/help/faqs" passHref>
            <a className={styles.navItem}>Help</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
