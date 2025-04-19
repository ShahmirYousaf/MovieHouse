// components/MovieCard.js
import Link from 'next/link';
import { useRouter } from 'next/router'; // To access the current route
import styles from '../styles/MovieHouse.module.css';

const MovieCard = ({ movie, showDetailsButton = true }) => {
  const router = useRouter(); // This will help us determine the current route
  const isMovieDetailPage = router.pathname.includes('/movies/'); // Check if we're on a movie detail page

  return (
    <div className={styles.movieCard}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>

      {/* Render View Details button only if we are NOT on the movie detail page */}
      {!isMovieDetailPage && showDetailsButton && (
        <Link href={`/movies/${movie.id}`} passHref>
          <button className={styles.viewDetailsBtn}>View Details</button>
        </Link>
      )}
    </div>
  );
};

export default MovieCard;
