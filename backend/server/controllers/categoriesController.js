const Category = require("../models/Category");

exports.findAll = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Erreur lors de la récupération des catégories" });
  }
};

exports.create = async (req, res) => {
  try {
    const category = new Category({ title: req.body.title });
    await category.save();
    return res.status(201).json(category);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Erreur lors de la création de la catégorie" });
  }
};
