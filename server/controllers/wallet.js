const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dbConnect = require("../db/connect");
const {
  setUserPin,
  getUserByID,
  getUserByPhone,
  getUserSecret,
  reduceBalanceQuery,
  updateReceiverBalanceQuery,
  userByPhoneQuery,
  transactionQuery,
  fetchFavNumber,
  addFavNumber,
  updateFavNumber,
  deleteFavNumber,
  getUserWithBalance,
  deleteUsers,
} = require("../db/query");
const authVerify = require("../middlewares/verifyToken");
const { pinValidation, transValidation } = require("../validator/validation");
const { v1: uuidv1 } = require("uuid");
const { loginUser } = require("./auth");

const pool = dbConnect();
const walletinfo = async (req, res) => {
  res.json(req.user);
};

const setPin = async (req, res) => {
  // validate data
  const { error } = pinValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { pin, password } = req.body;

  // Check if password is correct
  var user = (await pool.query(getUserByID, [req.user._id]))?.rows[0];

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send("Wrong Password...");

  try {
    var setQuery = await pool.query(setUserPin, [pin, req.user._id]);
    return res.send("Pin is set.");
  } catch (error) {
    return res.send(error);
  }
};

const sendMoney = async (req, res) => {
  // validate data
  const { error } = transValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Send Money
  const { receiver_phone, amount, pin } = req.body;
  console.log("User=>", req.user);
  try {
    var user = await pool.query(getUserByID, [req.user._id]);
  } catch (error) {
    console.log(error);
  }
  console.log("user ===========>", user);
  const senderPhone = user.rows[0].phone;


  try {
    var userSecret = await pool.query(getUserSecret, [req.user._id]);
  } catch (error) {
    console.log(error);
  }

  // Check if pin is correct
  console.log(userSecret.rows[0].pin);
  if (pin !== userSecret.rows[0].pin) return res.send("Invalid Pin...");

  // Check If receiver exist
  try {
    var receiver = await pool.query(getUserByPhone, [receiver_phone]);
  } catch (error) {
    console.log(error);
  }

  if (receiver.rowCount === 0) return res.send("Invalid Receiver...");
  if (receiver_phone == senderPhone) return res.send("Its your own account....");
  // Check if sender has balance
  const userBalance = userSecret.rows[0].balance;
  console.log("Userbalance", userBalance);
  if (amount > userBalance) return res.send("Insufficient Balance...");

  // Generate Trans Id
  const trans_id = uuidv1();

  // Reduce Balance of sender
  const currentBalance = userBalance - amount;

  try {
    var reduceBalance = await pool.query(reduceBalanceQuery, [
      currentBalance,
      req.user._id,
    ]);
  } catch (error) {
    console.log(error);
  }

  // Increase Balance of receiver
  const currentReceiverBalance = receiver.rows[0].balance;
  const newReceiverBalance = Number(currentReceiverBalance) + Number(amount);

  //user by phone
  try {
    var userByPhone = await pool.query(userByPhoneQuery, [receiver_phone]);
  } catch (error) {
    console.log(error);
  }
  try {
    var updateReciverBalance = await pool.query(updateReceiverBalanceQuery, [
      newReceiverBalance,
      userByPhone.rows[0].id,
    ]);
  } catch (error) {
    console.log(error);
  }

  try {
    const transaction = await pool.query(transactionQuery, [
      trans_id,
      senderPhone,
      receiver_phone,
      amount,
    ]);
    console.log(transaction);
    return res.send(`Transaction Successful: ${trans_id} `);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};
const addFav = async (req, res) => {
  const { phone } = req.body;
  console.log(req.user);
  try {
    const add = await pool.query(addFavNumber, [req.user._id, phone]);
    console.log(add);
    return res.send(`Addeed Successfully:${phone}`);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

const favNum = async (req, res) => {
  console.log(req.user._id);
  const fetch = await pool.query(fetchFavNumber, [req.user._id]);
  return res.send(fetch.rows);
};

const updateFav = async (req, res) => {
  const { phone, id } = req.body;
  await pool.query(updateFavNumber, [phone, id]);
  res.status(200).send("updated");
};

const deleteFav = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const pool = await dbConnect();
  await pool.query(deleteFavNumber, [id]);
  res.status(200).send("delete!!");
};

const getbalance = async (req, res) => {
  console.log("getData");

  const { _id } = req.user;
  const data = await pool.query(getUserWithBalance, [_id]);
  console.log(data);
  return res.json(data);
};
const deleteuser = async (req, res) => {
  const { id } = req.params;
  await pool.query(deleteUsers, [id]);
  res.status(200).send("User deleted!!");
};

module.exports = {
  walletinfo,
  setPin,
  sendMoney,
  addFav,
  favNum,
  updateFav,
  deleteFav,
  getbalance,
  deleteuser,
};
