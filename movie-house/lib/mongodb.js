import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI; // URI from .env.local
const MONGODB_DB = process.env.MONGODB_DB || 'MovieHouse'; // Database name

if (!MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to the .env.local file');
}

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return { db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  const db = client.db(MONGODB_DB);
  cachedDb = db;

  return { db };
}
