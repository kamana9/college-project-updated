const query = {
  userExist: `SELECT * FROM users WHERE email = $1 OR phone = $2 OR username = $3`,
  insertUser: `INSERT INTO users (first_name, last_name, username, phone, email, dob,gender,password) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id, username`,
  passwordCheck: `SELECT password FROM users where email = $1`,
  emailExist: `SELECT * FROM users WHERE email = $1`,
  getUser: `SELECT * FROM users WHERE email = $1 AND password = $2`,
  getUserByID: `SELECT * FROM users WHERE id = $1`,
  getUserByPhone: `SELECT * FROM users JOIN user_secret ON users.id = user_secret.user_id WHERE phone = $1`,
  insertUserSecret: `INSERT INTO user_secret(user_id) VALUES ($1)`,
  setUserPin: `UPDATE user_secret SET pin = $1 WHERE user_id = $2`,
  getUserSecret: `SELECT * FROM users JOIN user_secret ON users.id = user_secret.user_id WHERE id = $1`,
  reduceBalanceQuery: `UPDATE user_secret SET balance = $1 WHERE user_id = $2`,
  userByPhoneQuery: `SELECT * FROM users WHERE phone = $1`,
  updateReceiverBalanceQuery: `UPDATE user_secret SET balance = $1 WHERE user_id = $2`,
  transactionQuery: `INSERT INTO user_transaction (trans_id, sender_phone, receiver_phone, amount) VALUES ($1,$2, $3,$4)`,
  fetchFavNumber: `SELECT * FROM my_favourites WHERE user_id = $1;`,
  addFavNumber: `INSERT INTO my_favourites(user_id,phone) VALUES($1,$2)`,
  deleteFavNumber: `DELETE from my_favourites where id=$1;`,
  updateFavNumber: `Update my_favourites set phone=$1 where id=$2;`,
  getUserWithBalance: `Select temp.first_name,temp.last_name,temp.balance from 
   (Select * from user_secret left join users on user_secret.user_id=users.id) as temp where
    temp.user_id=$1`,
  adminemailExist: `SELECT * FROM admin WHERE email = $1`,
  gettransactions:`Select user_transaction.*, users.username from user_transaction left join 
  users on user_transaction.sender_phone=users.phone;`,
  getallusers:`SELECT * from users`,
  getoneusers:`SELECT * from users WHERE id= $1`,
  deleteUsers:`DELETE from users where id=$1`
};

module.exports = query;
