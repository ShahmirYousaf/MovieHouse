import useSWR from 'swr';
import Head from 'next/head';
import styles from '../../styles/MovieHouse.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

const DirectorsPage = () => {
  const { data, error } = useSWR('http://localhost:3000/api/directors', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Directors</title>
      </Head>
      <div className={styles.container}>
        <h1>Directors</h1>
        {data.directors.map((director) => (
          <div key={director.id} className={styles.directorCard}>
            <h3>{director.name}</h3>
            <p>{director.biography}</p>
            <h4>Movies Directed:</h4>
            <ul>
              {director.movies.length > 0 ? (
                director.movies.map((movie) => (
                  <li key={movie.id}>{movie.title} ({movie.releaseYear})</li>
                ))
              ) : (
                <li>No movies directed</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default DirectorsPage;
