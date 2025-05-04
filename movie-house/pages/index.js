import { useRouter } from 'next/router';
import Head from 'next/head';
import MovieCard from '../components/MovieCard';
import styles from '../styles/MovieHouse.module.css';

const Home = ({ trendingMovies }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Movie House</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.heading}>Trending Movies</h1>
        <div className={styles.movieGrid}>
          {trendingMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button className={styles.browseButton} onClick={() => router.push('/genres')}>Browse Genres</button>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/movies'); 
  const movies = await res.json();

  const trendingMovies = movies.filter(movie => movie.rating > 8) 

  if(!trendingMovies)
  {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      trendingMovies,
    },
    revalidate: 1800,
  };
}

export default Home;
