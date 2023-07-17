import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1:27017";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Database Connected.");
} catch(e) {
  console.error(e);
}

let db = conn.db("movie-db");

export default db;

