import { Schema, model } from "mongoose";
 
const AuthorSchema = new Schema({
  name: { type: String, required: true },
  bio: String,
});
 
export default model("Author", AuthorSchema);