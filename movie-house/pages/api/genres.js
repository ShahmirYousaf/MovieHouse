import { getAllGenres } from '../../helper/utils';

export default async function handler(req, res) {
  try {
    const genres = await getAllGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch genres' });
  }
}
