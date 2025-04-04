const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const authMiddleware = require("../middleware/authMiddleware");

// Récupérer tous les projets (public)
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    return res.json(projects);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Erreur lors de la récupération des projets" });
  }
});

// Récupérer un projet spécifique par ID (public)
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    return res.json(project);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Erreur lors de la récupération du projet" });
  }
});

// Ajouter un projet (admin uniquement)
router.post("/", authMiddleware, async (req, res) => {
  const { title, description, image, link } = req.body;
  if (!title || !description || !image || !link) {
    return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  try {
    const newProject = new Project({ title, description, image, link });
    await newProject.save();
    return res.status(201).json(newProject);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Erreur lors de la création du projet" });
  }
});

// Modifier un projet (admin uniquement)
router.put("/:id", authMiddleware, async (req, res) => {
  const { title, description, image, link } = req.body;
  if (Object.keys(req.body).length > 0) {
    if (title === "" || description === "" || image === "" || link === "") {
      return res
        .status(400)
        .json({ message: "Les champs ne peuvent pas être vides" });
    }
  }

  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // runValidators garantit que les validations du schéma sont appliquées
    );

    return res.json(updatedProject);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Erreur lors de la modification du projet" });
  }
});

// Supprimer un projet (admin uniquement)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    await project.deleteOne();
    return res.json({ message: "Projet supprimé avec succès" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Erreur lors de la suppression du projet" });
  }
});

module.exports = router;
