const express = require("express");
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of books from the database.
 *     responses:
 *       200:
 *         description: A list of books.
 */
router.get("/", getBooks);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve a book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the book to retrieve.
 *     responses:
 *       200:
 *         description: Book details.
 *       404:
 *         description: Book not found.
 */
router.get("/:id", getBookById);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Add a new book
 *     description: Add a new book to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               genre:
 *                 type: string
 *               publicationDate:
 *                 type: string
 *               rating:
 *                 type: number
 *     responses:
 *       201:
 *         description: Book added successfully.
 */
router.post("/", createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book
 *     description: Update details of an existing book.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the book to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               genre:
 *                 type: string
 *               publicationDate:
 *                 type: string
 *               rating:
 *                 type: number
 *     responses:
 *       200:
 *         description: Book updated successfully.
 *       404:
 *         description: Book not found.
 */
router.put("/:id", updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Remove a book from the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the book to delete.
 *     responses:
 *       200:
 *         description: Book deleted successfully.
 *       404:
 *         description: Book not found.
 */
router.delete("/:id", deleteBook);

module.exports = router;
