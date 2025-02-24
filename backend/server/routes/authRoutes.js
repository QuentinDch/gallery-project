const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Route de connexion
router.post("/login", authController.login);

// Route protégée
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Authorized access", user: req.user });
});

module.exports = router;
