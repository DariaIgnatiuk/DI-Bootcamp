const express = require('express');
const {getAllBooks, getBookById, createBook} = require('../controllers/books.controller.js')

const router = express.Router();

//Read all
router.get('/',  getAllBooks);

//read 
router.get('/:bookId', getBookById);

// Create 
router.post('/', createBook);


module.exports = router;
