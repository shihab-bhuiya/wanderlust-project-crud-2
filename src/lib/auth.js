import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is missing");
}

let client;
let clientPromise;

// cache MongoDB connection globally (important in Next.js)
if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

const connectedClient = await clientPromise;
const db = connectedClient.db("wanderlust");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: connectedClient,
  }),
  emailAndPassword: {
    enabled: true,
  },
});