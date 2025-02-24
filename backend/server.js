const express = require("express");
const connectDB = require("./server/config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const port = 5000;

dotenv.config();
// Connecter à MongoDB
connectDB();

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
const authRoutes = require("./server/routes/authRoutes");

app.use("/api/auth", authRoutes);

// Lancer le serveur
app.listen(port, () => {
  console.log("Server running on port " + port);
});
