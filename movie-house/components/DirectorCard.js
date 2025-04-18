// components/DirectorCard.js
import Link from 'next/link';
import styles from '../styles/MovieHouse.module.css';

const DirectorCard = ({ director }) => {
  return (
    <div className={styles.directorCard}>
      <h3>{director.name}</h3>
      <p>{director.biography}</p>
      <Link href={`/movies/${director.id}/director`} passHref>
        <button className={styles.viewDetailsBtn}>View Movies</button>
      </Link>
    </div>
  );
};

export default DirectorCard;
