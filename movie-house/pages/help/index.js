import Head from 'next/head';
import styles from '../../styles/MovieHouse.module.css';

const HelpPage = () => {
  return (
    <>
      <Head>
        <title>Help - Movie House</title>
      </Head>
      <div className={styles.container}>
        <h2>Welcome to the Help Section!</h2>
        <p>Select a category to learn more.</p>
      </div>
    </>
  );
};

export default HelpPage;
