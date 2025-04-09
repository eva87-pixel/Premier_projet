import { Router } from "express";
const router = Router();
import Item from "../models/Items.js";
//import Author from "../models/authors.js";
//import Books from "../models/Books.js";
 
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});
 
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});
 
router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item supprimé" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});
 
export default router;