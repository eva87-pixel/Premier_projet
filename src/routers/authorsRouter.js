import express from "express";
import Author from "../models/authors.js";
 
const router = express.Router();
 
router.get("/", async (req, res) => {
  try {
    const items = await Author.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});
 
router.post("/", async (req, res) => {
  try {
    const newItem = new Author(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});
 
router.delete("/:id", async (req, res) => {
    await Author.findByIdAndDelete(req.params.id);
    res.json({ message: "Auteur supprimé" });
  });
 
export default router;