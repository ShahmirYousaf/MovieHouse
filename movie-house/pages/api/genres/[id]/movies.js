import { getMoviesByGenre } from '../../../../helper/utils';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const movies = await getMoviesByGenre(id);

    if (!movies || movies.length === 0) {
      return res.status(404).json({ message: 'No movies found for this genre' });
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch movies by genre' });
  }
}
