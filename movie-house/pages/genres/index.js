import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/MovieHouse.module.css';

const GenresPage = ({ genres }) => {
  return (
    <>
      <Head>
        <title>Genres</title>
      </Head>
      <div className={styles.container}>
        <h1>Genres</h1>
        <div className={styles.genreList}>
          {genres.map((genre) => (
            <div key={genre.id} className={styles.genreCard}>
              <h3>{genre.name}</h3>
              <Link href={`/genres/${genre.id}`} passHref>
                <button className={styles.viewMoviesButton}>View Movies</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export async function getServerSideProps() {
  const genreRes = await fetch(`http://localhost:3000/api/genres`);
  const genres = await genreRes.json();

  return {
    props: {
      genres,
    },
  };
}

export default GenresPage;
