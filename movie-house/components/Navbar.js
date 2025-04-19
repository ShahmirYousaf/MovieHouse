// /components/Navbar.js
import Link from 'next/link';
import styles from '../styles/MovieHouse.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Movie House</h1>
      </div>
      <ul className={styles.navList}>
        <li>
          <Link href="/" passHref>
            <p className={styles.navItem}>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/movies" passHref>
            <p className={styles.navItem}>Movies</p>
          </Link>
        </li>
        <li>
          <Link href="/genres" passHref>
            <p className={styles.navItem}>Genres</p>
          </Link>
        </li>
        <li>
          <Link href="/directors" passHref>
            <p className={styles.navItem}>Directors</p>
          </Link>
        </li>
        <li>
          <Link href="/help" passHref>
            <p className={styles.navItem}>Help</p>
          </Link>
        </li>
        <li>
          <Link href="/help/faqs" passHref>
            <p className={styles.navItem}>FAQs</p>
          </Link>
        </li>
        <li>
          <Link href="/help/contact" passHref>
            <p className={styles.navItem}>Contact</p>
          </Link>
        </li>
        <li>
          <Link href="/help/privacy" passHref>
            <p className={styles.navItem}>Privacy</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
