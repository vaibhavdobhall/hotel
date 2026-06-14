import { MongoClient, MongoClientOptions, Db } from 'mongodb';

interface CachedClient {
  client: MongoClient | null;
  db: Db | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongo: CachedClient | undefined;
}

let cached: CachedClient = global.mongo || { client: null, db: null };

if (!global.mongo) {
  global.mongo = cached;
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (cached.client && cached.db) {
    return { client: cached.client, db: cached.db };
  }

  const opts: MongoClientOptions = {
    maxPoolSize: 10,
    minPoolSize: 1,
  };

  const client = new MongoClient(uri, opts);
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
