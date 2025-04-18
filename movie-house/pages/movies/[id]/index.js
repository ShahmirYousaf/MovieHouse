import { useRouter } from 'next/router';
import { getAllDirectors, getAllMovies } from '@/helper/utils';
import Head from 'next/head';
import MovieCard from '../../../components/MovieCard';
import styles from '../../../styles/MovieHouse.module.css';
import { notFound } from 'next/navigation';
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
  const movies = await getAllMovies();
  const paths = movies.map(movie => ({
    params: { id: movie.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await getAllMovies();
  const directors = await getAllDirectors()
  const movie = res.find(m => m.id === params.id);
  const director = directors.find(d => d.id === movie.directorId);

  return {
    props: {
      movie,
      director,
    },
    revalidate: 600,
  };
}

export default MovieDetail;
