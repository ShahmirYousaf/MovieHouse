// /pages/genres/[id].js
import Head from 'next/head';
import MovieCard from '../../../components/MovieCard';
import styles from '../../../styles/MovieHouse.module.css';
import { getAllGenres, getAllMovies } from '@/helper/utils'; // Helper functions to fetch data

const GenreDetail = ({ genre, movies }) => {
  return (
    <>
      <Head>
        <title>{genre.name} Movies</title>
      </Head>
      <div className={styles.container}>
        <h1>{genre.name} Movies</h1>
        <div className={styles.movieGrid}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

// Server-Side Rendering (SSR) for Genre Detail Page
export async function getServerSideProps({ params }) {
  const genres = await getAllGenres(); // Fetch all genres
  const movies = await getAllMovies(); // Fetch all movies
  const genre = genres.find((g) => g.id === params.id); // Find the genre based on the ID
  const filteredMovies = movies.filter((movie) => movie.genreId === genre.id); // Filter movies by genre ID

  return {
    props: {
      genre,
      movies: filteredMovies,
    },
  };
}

export default GenreDetail;
