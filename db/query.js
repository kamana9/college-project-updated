const query = {
  "userExist": `SELECT * FROM users WHERE email = $1 OR phone = $2 OR username = $3`,
  "insertUser": `INSERT INTO users (first_name, last_name, username, phone, email, dob,gender,password) values ($1, $2, $3, $4, $5, $6, $7, $8)`,
  "passwordCheck": `SELECT password FROM users where email = $1`,
  "emailExist": `SELECT * FROM users WHERE email = $1`,
  "getUser": `SELECT * FROM users WHERE email = $1 AND password = $2`,
  "getUserByID": `SELECT * FROM users WHERE id = $1`,
};

module.exports = query;