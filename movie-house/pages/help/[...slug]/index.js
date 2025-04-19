// /pages/help/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../../styles/MovieHouse.module.css';

const HelpDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query; // This will capture 'faqs', 'contact', 'privacy', etc.

  let content = null;

  // Determine which content to display based on the slug
  switch (slug?.[0]) { // Ensure we access the first item in the slug array
    case 'faqs':
      content = <div><h2>FAQs</h2><p>Here are some frequently asked questions...</p></div>;
      break;
    case 'contact':
      content = <div><h2>Contact Us</h2><p>Feel free to reach out to us!</p></div>;
      break;
    case 'privacy':
      content = <div><h2>Privacy Policy</h2><p>Your privacy is important to us...</p></div>;
      break;
    default:
      content = <div><h2>Help</h2><p>Welcome to the help section! Please select a valid category.</p></div>;
      break;
  }

  return (
    <>
      <Head>
        <title>{slug?.[0] ? slug[0].charAt(0).toUpperCase() + slug[0].slice(1) : 'Help'} - Movie House</title>
      </Head>
      <div className={styles.container}>
        {content}
      </div>
    </>
  );
};

export default HelpDetailPage;
