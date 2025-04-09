const mongoose = require("mongoose");
const currentYear = new Date().getFullYear();

const ProjectSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: [1900],
    max: [currentYear],
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
