import { getAllMovies, getAllDirectors } from '@/helper/utils'; // Helper functions to get data

export default async function handler(req, res) {
  const movies = await getAllMovies();
  const directors = await getAllDirectors();

  const directorsWithMovies = directors.map((director) => {
    const directedMovies = movies.filter((movie) => movie.directorId === director.id);
    return {
      ...director,
      movies: directedMovies,
    };
  });

  res.status(200).json({ directors: directorsWithMovies });
}