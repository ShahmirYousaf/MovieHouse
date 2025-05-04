import { useRouter } from 'next/router';
import Head from 'next/head';
import MovieCard from '../../../components/MovieCard';
import styles from '../../../styles/MovieHouse.module.css';
import Link from 'next/link';

const MovieDetail = ({ movie, director }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div className={styles.container}>
        <MovieCard movie={movie} />
        <div className={styles.details}>
          <h2>Director: <Link href={`/movies/${movie.id}/director`}>{director.name}</Link></h2>
          <p><strong>Description:</strong> {movie.description}</p>
          <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/movies');
  const movies = await res.json();
  const paths = movies.map(movie => ({
    params: { id: movie.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const movieRes = await fetch(`http://localhost:3000/api/movies/${params.id}`);
  const movie = await movieRes.json();

  const directorRes = await fetch(`http://localhost:3000/api/directors/${movie.directorId}`);
  const director = await directorRes.json();

  return {
    props: {
      movie,
      director,
    },
    revalidate: 600,
  };
}

export default MovieDetail;
