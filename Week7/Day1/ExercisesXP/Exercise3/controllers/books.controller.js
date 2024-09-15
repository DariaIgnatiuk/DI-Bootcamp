const { books } = require("../config/data.js")


const getAllBooks = (req, res) =>{
    console.log(books);
    
    res.json(books);
}

const createBook = (req, res) => {
    console.log(req.body);
    const { title, author } = req.body;
    const newBook = {id: books.length + 1, title, author};
    books.push(newBook);
    res.json(books);
  }

const updateBook = (req, res) => {
    const { id } = req.params;
    const {  title, author } = req.body;
    const index = books.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "book to update not found" });
    }
    books[index] = { ...books[index], title, author };
    res.json({ books, activ: true, status: 3 });
  }

const deleteBook = (req, res) => {
    const { id } = req.params;
    const index = books.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "book to delete not found" });
    }
    books.splice(index, 1);
    res.json(books);
  }


module.exports = { 
    getAllBooks,
    createBook,
    updateBook,
    deleteBook}