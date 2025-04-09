import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import itemsRouter from "./src/routers/itemsRouter.js";
import booksRouter from "./src/routers/booksRouter.js";
import authorsRouter from "./src/routers/authorsRouter.js";
import PORT from "./config/config.js";

const app = express();
app.use(json());
app.use(cors());

connectDB();

// ROUTES
app.get("/", (req, res) => {
  res.send("API en ligne 🚀");
});
app.use("/items", itemsRouter);

app.use("/authors", authorsRouter);
app.use("/books", booksRouter);

app.listen(PORT, () => console.log(`🚀 Serveur sur http://localhost:${PORT}`));