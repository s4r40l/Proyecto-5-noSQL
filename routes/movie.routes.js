const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// GET todas las películas
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ error: "Error obteniendo películas" });
  }
});

// POST crear película
router.post("/", async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "El cuerpo de la petición está vacío" });
    }

    const newMovie = await Movie.create(req.body);
    return res.status(201).json(newMovie);

  } catch (error) {
    return res.status(500).json({
      error: "Error creando película",
      details: error.message
    });
  }
});

// PUT modificar película
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedMovie) {
      return res.status(404).json({ error: "Película no encontrada" });
    }

    return res.status(200).json(updatedMovie);

  } catch (error) {
    return res.status(500).json({
      error: "Error actualizando película",
      details: error.message
    });
  }
});

// DELETE eliminar película
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res.status(404).json({ error: "Película no encontrada" });
    }

    return res.status(200).json({
      message: "Película eliminada correctamente",
      movie: deletedMovie
    });

  } catch (error) {
    return res.status(500).json({
      error: "Error eliminando película",
      details: error.message
    });
  }
});

module.exports = router;
