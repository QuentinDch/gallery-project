const express = require("express");
const router = express.Router();
const categoriesCtrl = require("../controllers/categoriesController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", categoriesCtrl.findAll);

router.post("/", authMiddleware, categoriesCtrl.create);

module.exports = router;
