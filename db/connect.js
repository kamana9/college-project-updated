const {Pool} = require('pg');


const credentials = {
  user: "postgres",
  host: "localhost",
  database: "newone",
  password: "",
  port: 5432,
};

async function dbConnect() {
  const pool = new Pool(credentials);
  return pool;
};




module.exports = dbConnect;