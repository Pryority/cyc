import { MongoClient } from "mongodb";

const { MONGODB_URI } = process.env;

const uri = MONGODB_URI;
const options = {
  poolSize: 1,
  connectTimeoutMS: 10000,
  family: 4,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// TODO: update types
let client: any;
let clientPromise: unknown;

if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!process.env.MONGODB_DB) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

if (process.env.NODE_ENV === "development") {
  options.poolSize = 1;
  options.connectTimeoutMS = 10000;
  options.family = 4;
}

if (!clientPromise) {
  clientPromise = MongoClient.connect(`${uri}`, options).then((c) => {
    client = c;
    return client;
  });
}

export async function connectToDatabase() {
  await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  return { db, client };
}
