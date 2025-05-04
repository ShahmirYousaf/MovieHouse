import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../../../styles/MovieHouse.module.css';

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
  const directorRes = await fetch(`http://localhost:3000/api/directors/${params.id}`);
  const director = await directorRes.json();

  const moviesRes = await fetch(`http://localhost:3000/api/genres/${director.genreId}/movies`);
  const moviesDirected = await moviesRes.json();

  return {
    props: {
      director,
      movies: moviesDirected,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch('api/movies');
  const movies = await res.json();
  const paths = movies.map(movie => ({
    params: { id: movie.id },
  }));

  return { paths, fallback: true };
}

export default DirectorDetail;
