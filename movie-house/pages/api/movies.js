import { getAllMovies } from '../../helper/utils';

export default async function handler(req, res) {
  try {
    const movies = await getAllMovies(); // Get movies from MongoDB
    res.status(200).json(movies); // Send movies as JSON response
  } catch (error) {
    console.error('Error fetching movies:', error); // Log the error for debugging
    res.status(500).json({ message: 'Failed to fetch movies', error: error.message });
  }
}
