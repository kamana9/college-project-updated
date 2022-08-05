const { Pool } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "newone",
  password: "qwerty123",
  port: 5432,
};

function dbConnect() {
  const pool = new Pool(credentials);
  return pool;
}

module.exports = dbConnect;
