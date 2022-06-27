const bcrypt = require("bcryptjs");
const req = require("express/lib/request");
const jwt = require("jsonwebtoken");
const dbConnect = require("../db/connect");
const { insertUser, insertUserSecret } = require("../db/query");
const query = require("../db/query");
const authVerify = require("../middlewares/verifyToken");
const {
  registerValidation,
  loginValidation,
} = require("../validator/validation");

const registerUser = async (req, res) => {
  const pool = await dbConnect();
  // validate data
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { email, phone, username } = req.body;

  // Check if user already exist
  const userExist = await pool.query(query.userExist, [email, phone, username]);
  if (userExist.rowCount > 0) {
    return res.json({ message: "Seems like user already exist" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.username,
    req.body.phone,
    req.body.email,
    req.body.dob,
    req.body.gender,
  ];

  try {
    const register = await pool.query(insertUser, [...values, hashedPassword]);
    const createWallet = await pool.query(insertUserSecret, [
      register.rows[0].id,
    ]);
    return res.send("Your account is successfully registered.");
  } catch (error) {
    console.log(error);
    return res.json({ Message: error });
  }
};

const loginUser = async (req, res) => {
  const pool = await dbConnect();
  // validate data
  const { error } = loginValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // Check if email exist
  const emailExist = await pool.query(query.emailExist, [req.body.email]);
  if (emailExist.rowCount === 0) {
    return res.json({ message: "Seems like user doesn't exist!" });
  }

  // compare password with hash
  const getPassword = await pool.query(query.passwordCheck, [req.body.email]);
  const hashedPassword = getPassword.rows[0].password;

  const validPass = await bcrypt.compare(req.body.password, hashedPassword);
  if (!validPass) return res.status(400).send("Wrong Password...");

  // get user
  const user = await pool.query(query.getUser, [
    req.body.email,
    hashedPassword,
  ]);

  // Create and Assign a Token
  const token = jwt.sign(
    { _id: user.rows[0].id, _username: user.rows[0].username },
    "RawTexthohai"
  );
  res.header("auth-token", token);
  return res.send({ token: token });
};

module.exports = {
  registerUser,
  loginUser,
};
