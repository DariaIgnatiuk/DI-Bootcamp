const {_getAllBooks, _getBookById, _createBook} = require('../models/books.model.js')

const getAllBooks = (req, res) =>{
    _getAllBooks()
  .then(data => {
    res.json(data);
  })
  .catch((e) =>{
    console.log(e);
  })
}

const getBookById = async (req, res) => {
    const { bookId } = req.params;
    
    try {
      const data = await _getBookById(bookId)
      if (data.length === 0) {res.status(404).json({message:'No book with such id'})}
      else res.json(data)
    } catch (error) {
      res.status(404).json({message:'No book with such id'})
    }

}

const createBook = async (req, res) => {
    const { title, author, publishedyear } = req.body;
    try {
      const data = await _createBook(title, author, publishedyear);
      getAllBooks(req,res);
    } catch (error) {
      res.status(402).json({message:"something is wrong"})
    }
  }

module.exports = {
    getAllBooks, 
    getBookById, 
    createBook,
}