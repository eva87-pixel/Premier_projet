import express from "express";
import Books from "../models/Books.js";
 
const router = express.Router();
 
router.get("/", async (req, res) => {
  try {
    const books = await Books.find().populate("author");
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});
 
router.post("/", async (req, res) => {
  try {
    const newBook = new Books(req.body);
    await newBook.save();
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});
 
router.delete("/:id", async (req, res) => {
    await Books.findByIdAndDelete(req.params.id);
    res.json({ message: "Livre supprimé" });
  });
 
export default router;