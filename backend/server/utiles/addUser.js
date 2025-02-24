const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../models/User");

const addUser = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const user = new User({
    username: "admin",
    email: "admin@example.com",
    password: hashedPassword,
  });

  await user.save();
  console.log("User added successfully !");
  mongoose.connection.close();
};

addUser().catch((err) => console.error(err));
