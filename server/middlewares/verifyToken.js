const jwt = require("jsonwebtoken");

const authVerify = (req, res, next) => {
  const token = req.header("auth-token");
  console.log(token);
  if (!token) return res.status(401).send("Access Denied!");

  try {
    const verified = jwt.verify(token, "RawTexthohai");
    console.log(verified);
    console.log("logging gere: ", verified);
    req.user = verified;
    next();
  } catch (error) {
    console.log(error);
  }
};
const adminVerify = (req, res, next) => {
  const token = req.header("auth-token");
  try {
    const claim = jwt.decode(token);
    if (claim?.role !== "admin")
      return res.status(400).send({ message: "Unauthorized Access" });
    req.user = claim;
    return next();
  } catch (error) {
    return res.send(error);
    console.log(error);
  }
};

module.exports = {
  authVerify,
  adminVerify,
};
