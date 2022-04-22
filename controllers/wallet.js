const jwt  = require("jsonwebtoken");
const { walletValidation } = require("../validator/validation");


const walletinfo = (req, res) => {
  res.send('Wallet no is yeto');
};

const registerWallet = (req, res) => {

  // Validate
  const {error} = walletValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // get user id
  const token = req.header('auth-token');
  try {
    const verified = jwt.verify(token, 'RawTexthohai');
    const userId = verified._id;
    console.log(userId); //undefined
  } catch (error) {
    res.send(error);
  }

  
  
  // const user = await pool.query(query.getUser, [req.body.email, hashedPassword]);

  return res.send('null');


}

module.exports = {
  walletinfo,
  registerWallet
};