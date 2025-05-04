import { connectToDatabase } from '../lib/mongodb';

export const getAllMovies = async () => {
  const { db } = await connectToDatabase();
  const movies = await db.collection('movies').find({}).toArray();
  return movies;
};

export const getAllGenres = async () => {
  const { db } = await connectToDatabase();
  const genres = await db.collection('genres').find({}).toArray();
  return genres;
};

export const getAllDirectors = async () => {
  const { db } = await connectToDatabase();
  const directors = await db.collection('directors').find({}).toArray();
  return directors;
};

export const getMovieById = async (id) => {
  const { db } = await connectToDatabase();
  const movie = await db.collection('movies').findOne({ id });
  return movie;
};

export const getMoviesByGenre = async (genreId) => {
  const { db } = await connectToDatabase();
  const movies = await db.collection('movies').find({ genreId }).toArray();
  return movies;
};

export const getDirectorById = async (id) => {
  const { db } = await connectToDatabase();
  const director = await db.collection('directors').findOne({ id });
  return director;
};

export const getMoviesByDirector = async (directorId) => {
  const { db } = await connectToDatabase();
  const movies = await db.collection('movies').find({ directorId }).toArray();
  return movies;
};