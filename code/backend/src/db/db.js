import { Client } from "pg"





export async function executeDatabaseQuery(query,values) {

  const client = new Client({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "bidding_floor_db",
});


  try {

    await client.connect();
    const result = await client.query(query,values);
    console.log("Query successful");
    return result;

  } catch (err) {

    console.log("Database error:", err);
    throw err;

  } finally {

    await client.end();

  }
}




