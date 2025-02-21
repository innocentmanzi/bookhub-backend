const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  publicationDate: { type: String },
  rating: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Book", bookSchema);
