const bcrypt = require("bcryptjs");
const { response } = require("express");
const req = require("express/lib/request");
const jwt = require("jsonwebtoken");
const dbConnect = require("../db/connect");
const { insertUser, insertUserSecret } = require("../db/query");
const query = require("../db/query");
const {
  loginValidation,
} = require("../validator/validation");



const pool = dbConnect();
const loginAdmin = async (req, res) => {
    
    // validate data
    const { error } = loginValidation(req.body);
  
    if (error) return res.status(400).send(error.details[0].message);
  
    // Check if email exist
    const admin = await pool.query(query.adminemailExist, [req.body.email]);
    if (admin.rowCount === 0) {
      return res.json({ message: "Seems like admin doesn't exist!" });
    }
  
    // compare password with hash
    const hashedPassword = admin.rows[0].password;
  
    const validPass = await bcrypt.compare(req.body.password, hashedPassword);
    if (!validPass) return res.status(400).send("Wrong Password...");
  

    // Create and Assign a Token
    const token = jwt.sign(
      { _id: admin.rows[0].id, _email: admin.rows[0].email, role:"admin" },
      "RawTexthohai"
    );
    //res.header("auth-token", token);
    return res.send({ token: token });
  };
  
  const getalltransactions =async (_,res) =>{
    const transaction = await pool.query(query.gettransactions);
    return res.send(transaction.rows)

  }
  const getusers =async (_,res) =>{
    const transaction = await pool.query(query.getallusers);
    return res.send(transaction.rows)

  }

  module.exports = {
    loginAdmin,
    getalltransactions,
    getusers
  };
  