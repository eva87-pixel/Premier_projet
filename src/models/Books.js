import mongoose, { Schema, model } from "mongoose";
 
const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String},
});

export default model("Books", BookSchema);