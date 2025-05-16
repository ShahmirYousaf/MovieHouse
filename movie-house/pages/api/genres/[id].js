import { getGenrebyId } from '../../../helper/utils';

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const genre = await getGenrebyId(id);
    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch genre' });
  }
}
