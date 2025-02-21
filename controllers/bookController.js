const Book = require("../models/Book");

// 📌 Create Book
exports.createBook = async (req, res) => {
  try {
    const { title, author, genre, publicationDate, rating } = req.body;

    if (!title || !author || !genre || !publicationDate || !rating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const book = await Book.create({
      title,
      author,
      genre,
      publicationDate,
      rating,
      likes: 0, // Default likes to 0
    });

    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    console.error("Error creating book:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};


// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
};

// Get a single book
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book" });
  }
};

// 📌 Update a Book
exports.updateBook = async (req, res) => {
  try {
    const { title, author, genre, publicationDate, rating } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, genre, publicationDate, rating },
      { new: true }
    );
    if (!updatedBook) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book updated successfully", updatedBook });
  } catch (error) {
    res.status(500).json({ message: "Error updating book" });
  }
};

// 📌 Delete a Book
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book" });
  }
};
