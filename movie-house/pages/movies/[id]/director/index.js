import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/MovieHouse.module.css';
import { getAllMovies } from '@/helper/utils';
import Link from 'next/link';

const DirectorDetail = ({ director, movies }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{director.name}</title>
      </Head>
      <div className={styles.container}>
        <h1>Director: {director.name}</h1>
        <p>{director.biography}</p>
        <h3>Movies Directed:</h3>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const res = await getAllMovies();
  const movie = res.movies.find(m => m.id === params.id);
  const director = res.directors.find(d => d.id === movie.directorId);
  const moviesDirected = res.movies.filter(m => m.directorId === director.id);

  return {
    props: {
      director,
      movies: moviesDirected,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const movies = await getAllMovies();
  const paths = movies.map(movie => ({
    params: { id: movie.id },
  }));

  return { paths, fallback: true };
}

export default DirectorDetail;
