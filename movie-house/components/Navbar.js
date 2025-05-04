import Link from 'next/link';
import styles from '../styles/MovieHouse.module.css';
import Image from 'next/image';
import ThemeContext from '../context/ThemeContext';
import { useContext, useEffect } from 'react';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/movie-house.png" alt="Movie House Logo" width={150} height={80} />
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

      <button className={styles.toggleBtn} onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
