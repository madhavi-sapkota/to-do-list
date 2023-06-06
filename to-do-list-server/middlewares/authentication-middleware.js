const jwt = require("jsonwebtoken");

const verifyUserToken = (req, res, next) => {
  //   next();
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.foundUser.id;
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).send("Token Expired");
    }
    console.log(err);
    res.status(400).send("Invalid token.");
  }
};

module.exports = {
  verifyUserToken,
};
