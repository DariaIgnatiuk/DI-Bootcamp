const express = require('express');
const { getAllBooks,createBook,updateBook,deleteBook} = require('../controllers/books.controller.js')
const router = express.Router();


// Get all books
router.get("/", getAllBooks);

// Add a new book
router.post("/", createBook);

// Update a book by ID
router.put("/:id", updateBook);

// Delete a book by ID
router.delete("/:id", deleteBook);


module.exports = router;