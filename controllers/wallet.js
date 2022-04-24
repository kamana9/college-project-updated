const jwt  = require("jsonwebtoken");
const dbConnect = require("../db/connect");
const { setUserPin, getUserByID, getUserByPhone, getUserSecret, reduceBalanceQuery, updateReceiverBalanceQuery } = require("../db/query");
const authVerify = require("../middlewares/verifyToken");
const {pinValidation } = require("../validator/validation");
const { v1: uuidv1} = require('uuid');
const { loginUser } = require("./auth");



const walletinfo = async(req, res) => {
  res.json(req.user);
};

const setPin = async(req, res) => {
  const pool = await dbConnect();

  // validate data
    const {error} = pinValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const {pin} = req.body;

    try {
      const setQuery = await pool.query(setUserPin, [pin, req.user._id]);
      return res.send("Pin is set.")
    } catch (error) {
      return res.send(error);
    }

};

const sendMoney = async (req, res) => {
  const pool = await dbConnect();

  // Send Money
  const {receiver_phone, amount, pin} = req.body;
  const user = await pool.query(getUserByID, [req.user._id]);
  const senderPhone = user.rows[0].phone;

  const userSecret = await pool.query(getUserSecret, [req.user._id]);

  // Check if pin is correct 
  if (pin !== userSecret.rows[0].pin) return res.send('Invalid Pin...');

  // Check If receiver exist
  const receiver = await pool.query(getUserByPhone, [receiver_phone]);
  if (receiver.rowCount === 0) return res.send('Invalid Receiver...');

  // Check if sender has balance
  const userBalance = userSecret.rows[0].balance;
  console.log("Userbalance", userBalance);
  if (amount > userBalance) return res.send('Insufficient Balance...');

  // Generate Trans Id
  const trans_id = uuidv1();

  // Reduce Balance of sender
  const currentBalance = userBalance - amount;
  console.log(
  `current balance: ${currentBalance}
  User balance: ${userBalance}
  Amount balance: ${amount} `
  );
  const reduceBalance = await pool.query(reduceBalanceQuery, [currentBalance, req.user._id]);
  console.log('Reduce Balance:   ', reduceBalance);

  // Increase Balance of receiver
  const currentReceiverBalance = receiver.rows[0].balance;
  const newReceiverBalance = Number(currentReceiverBalance) + Number(amount);
  const updateReciverBalance = await pool.query(updateReceiverBalanceQuery, [newReceiverBalance, receiver_phone]);

  console.log("CRB: ",currentReceiverBalance); 
  console.log('NRB', newReceiverBalance);
  console.log('uRB:', updateReciverBalance);
  return res.send(`Transaction Successful: ${trans_id} New Balance of Receiver: ${newReceiverBalance} Current user of `);
};

module.exports = {
  walletinfo,
  setPin,
  sendMoney
};