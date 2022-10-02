const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  //get token from header
  const token = req.header("x-auth-token");

  //check if not token
  if (!token)
    return res.status(401).json({ msg: "not token, authorization denied" });
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
