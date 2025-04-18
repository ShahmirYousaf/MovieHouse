// /pages/404.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/MovieHouse.module.css';
import React from 'react';

const Custom404 = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className={styles.errorPage}>
        <h1 className={styles.errorHeading}>Oops! Page Not Found</h1>
        <p className={styles.errorMessage}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" passHref>
          <button className={styles.goHomeButton}>Go Home</button>
        </Link>
      </div>
    </>
  );
};

export default Custom404;
