import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import styles from '../../styles/MovieHouse.module.css';

const Movies = ({ movies, genres }) => {
  const [selectedGenre, setSelectedGenre] = useState('all'); 
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (selectedGenre === 'all') {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter((movie) => movie.genreId === selectedGenre));
    }
  }, [selectedGenre, movies]);

    if (!genres || genres.length === 0) {
    return <p>Genres data is not available.</p>;
    }

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>All Movies</h1>

        {/* Genre Filter Dropdown */}
        <div className={styles.filterContainer}>
          <select className={styles.filterDropdown} value={selectedGenre} onChange={handleGenreChange}>
            <option value="all">All Genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.movieGrid}>
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const moviesRes = await fetch('http://localhost:3000/api/movies');
  const movies = await moviesRes.json();
  const genresRes = await fetch('http://localhost:3000/api/genres');
  const genres = await genresRes.json();

  if (!movies || !genres) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movies,
      genres,
    },
    revalidate: 1800, // Revalidate every 30 minutes
  };
}

export default Movies;
