// components/GenreCard.js
import Link from 'next/link';
import styles from '../styles/MovieHouse.module.css';

const GenreCard = ({ genre }) => {
  return (
    <div className={styles.genreCard}>
      <h2>{genre.name}</h2>
      <Link href={`/genres/${genre.id}`} passHref>
        <button className={styles.viewDetailsBtn}>Explore Movies</button>
      </Link>
    </div>
  );
};

export default GenreCard;
