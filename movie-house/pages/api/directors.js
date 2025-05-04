import { getAllDirectors } from '../../helper/utils';
import { getMoviesByDirector } from '../../helper/utils'; // Import the function to get movies by director

export default async function handler(req, res) {
  try {
    const directors = await getAllDirectors(); // Get all directors from MongoDB

    // For each director, fetch the movies they directed
    const directorsWithMovies = await Promise.all(
      directors.map(async (director) => {
        const movies = await getMoviesByDirector(director.id); // Fetch movies by director ID
        return {
          ...director,
          movies, // Add movies to each director
        };
      })
    );

    res.status(200).json({ directors: directorsWithMovies }); // Return the directors with their movies
  } catch (error) {
    console.error('Error fetching directors:', error);
    res.status(500).json({ message: 'Failed to fetch directors', error: error.message });
  }
}
