const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

module.exports.checkUser = (req, res, next) => {
  const token = req.headers["authorization"]?.split("Bearer ")[1];
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        req.user = null;
      } else {
        let user = await UserModel.findById(decodedToken.id);
        req.user = user;
        next();
      }
    });
  } else {
    req.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  if (!req.user)
    return res.sendStatus(401).json({ error: "Unauthorized" });
  req.userId = req.user._id;
  next();
};
