const jwt = require("jsonwebtoken");
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
} = require("../db/query");
const authVerify = require("../middlewares/verifyToken");
const { pinValidation, transValidation } = require("../validator/validation");
const { v1: uuidv1 } = require("uuid");
const { loginUser } = require("./auth");

const walletinfo = async (req, res) => {
  res.json(req.user);
};

const setPin = async (req, res) => {
  const pool = await dbConnect();

  // validate data
  const { error } = pinValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { pin } = req.body;

  try {
    var setQuery = await pool.query(setUserPin, [pin, req.user._id]);
    return res.send("Pin is set.");
  } catch (error) {
    return res.send(error);
  }
};

const sendMoney = async (req, res) => {
  const pool = await dbConnect();

  // validate data
  const { error } = transValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Send Money
  const { receiver_phone, amount, pin } = req.body;
  try {
    var user = await pool.query(getUserByID, [req.user._id]);
  } catch (error) {
    console.log(error);
  }

  const senderPhone = user.rows[0].phone;

  try {
    var userSecret = await pool.query(getUserSecret, [req.user._id]);
  } catch (error) {
    console.log(error);
  }

  // Check if pin is correct
  if (pin !== userSecret.rows[0].pin) return res.send("Invalid Pin...");

  // Check If receiver exist
  try {
    var receiver = await pool.query(getUserByPhone, [receiver_phone]);
  } catch (error) {
    console.log(error);
  }

  if (receiver.rowCount === 0) return res.send("Invalid Receiver...");

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
    const transaction = await pool.query(transactionQuery, [trans_id, senderPhone, receiver_phone, amount]);
    console.log(transaction);
    return res.send(
      `Transaction Successful: ${trans_id} `
    );
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

module.exports = {
  walletinfo,
  setPin,
  sendMoney,
};
