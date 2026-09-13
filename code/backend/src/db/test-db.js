const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "bidding_floor_db",
});

client.connect();

client.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Connected!");
    console.log(res.rows);
  }

  client.end();
});
