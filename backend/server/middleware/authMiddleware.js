const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.userId;
    req.user = { userId };

    if (req.body.userId && req.body.userId !== decoded.userId) {
      return res.status(403).json({ message: "Invalid user ID" });
    }

    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};

module.exports = authMiddleware;
