// /pages/genres/[id].js
import Head from 'next/head';
import MovieCard from '../../../components/MovieCard';
import styles from '../../../styles/MovieHouse.module.css';

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
  const genreRes = await fetch(`http://localhost:3000/api/genres/${params.id}`);
  const genre = await genreRes.json();

  const moviesRes = await fetch(`http://localhost:3000/api/genres/${params.id}/movies`);
  const filteredMovies = await moviesRes.json();

  return {
    props: {
      genre,
      movies: filteredMovies,
    },
  };
}

export default GenreDetail;
