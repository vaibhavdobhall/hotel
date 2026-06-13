import { MongoClient, MongoClientOptions, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface CachedClient {
  client: MongoClient | null;
  db: Db | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongo: CachedClient;
}

let cached: CachedClient = global.mongo || { client: null, db: null };

if (!global.mongo) {
  global.mongo = cached;
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cached.client && cached.db) {
    return { client: cached.client, db: cached.db };
  }

  const opts: MongoClientOptions = {
    maxPoolSize: 10,
    minPoolSize: 1,
  };

  const client = new MongoClient(MONGODB_URI, opts);
  await client.connect();

  const db = client.db('hotel');

  cached.client = client;
  cached.db = db;

  return { client, db };
}

export async function getDatabase(): Promise<Db> {
  const { db } = await connectToDatabase();
  return db;
}
