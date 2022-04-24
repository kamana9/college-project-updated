const jwt = require('jsonwebtoken');

const authVerify = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied!');

  try {
    const verified = jwt.verify(token, 'RawTexthohai');
    console.log(verified);
    console.log("logging gere: ", verified);
    req.user = verified;
    
    next();
  } catch (error) {
    console.log(error);
  }
}

module.exports = authVerify;