import { getMovieById } from '../../../helper/utils';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const movie = await getMovieById(id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch movie details' });
  }
}
