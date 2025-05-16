// /pages/genres/[id].js
import Head from 'next/head';
import MovieCard from '../../../components/MovieCard';
import styles from '../../../styles/MovieHouse.module.css';

const GenreDetail = ({ genre, movies }) => {
  return (
    <>
      <Head>
        <title>{genre.name.toString()} Movies</title>
      </Head>
      <div className={styles.container}>
        <h1>{genre.name.toString()} Movies</h1>
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
  // Fetch the genre by ID
  const genreRes = await fetch(`http://localhost:3000/api/genres/${params.id}`);
  
  // Handle error if genre fetch fails
  if (!genreRes.ok) {
    return { notFound: true };  // Return a 404 page if genre not found
  }
  const genre = await genreRes.json();

  // Fetch the movies based on the genre ID
  const moviesRes = await fetch(`http://localhost:3000/api/genres/${params.id}/movies`);
  
  // Handle error if movie fetch fails
  if (!moviesRes.ok) {
    return { notFound: true };  // Return a 404 page if no movies are found
  }
  const filteredMovies = await moviesRes.json();

  return {
    props: {
      genre, // Pass the genre data to the page
      movies: filteredMovies, // Pass the movies data to the page
    },
  };
}

export default GenreDetail;
