import Link from 'next/link';
import styles from '../styles/MovieHouse.module.css';

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <Link href={`/movies/${movie.id}`} passHref>
        <button className={styles.viewDetailsBtn}>View Details</button>
      </Link>
    </div>
  );
};

export default MovieCard;
