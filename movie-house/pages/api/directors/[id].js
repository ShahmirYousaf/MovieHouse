import { getDirectorById, getMoviesByDirector } from '../../../helper/utils';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const director = await getDirectorById(id);

    if (!director) {
      return res.status(404).json({ message: 'Director not found' });
    }

    // Fetch movies directed by this director
    const movies = await getMoviesByDirector(id);

    res.status(200).json({ ...director, movies }); // Attach movies to the director
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch director details', error: error.message });
  }
}
