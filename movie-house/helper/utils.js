import fs from 'fs';
import path from 'path';

// Helper function to read the JSON data
const getData = () => {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

// Function to get all movies
export const getAllMovies = () => {
  const data = getData();
  return data.movies;
};

// Function to get all genres
export const getAllGenres = () => {
  const data = getData();
  return data.genres;
};

// Function to get all directors
export const getAllDirectors = () => {
  const data = getData();
  return data.directors;
};
