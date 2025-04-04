const express = require("express");
const connectDB = require("./server/config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const port = 5000;

dotenv.config();
// Connecter à MongoDB
connectDB();

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000", // ⚠️ Remplacer par l'URL du frontend en prod
    credentials: true,
  })
);

// Routes
const authRoutes = require("./server/routes/authRoutes");
app.use("/api/auth", authRoutes);

const projectRoutes = require("./server/routes/projectRoutes");
app.use("/api/projects", projectRoutes);

const categoryRoutes = require("./server/routes/categoriesRoutes");
app.use("/api/categories", categoryRoutes);

// Lancer le serveur
app.listen(port, () => {
  console.log("Server running on port " + port);
});
