const {db} = require('../config/data.js')

const _getAllBooks = () => {
    return db('books').select('id', 'title', 'author', "publishedyear").orderBy('id');
};

const _getBookById = (id) =>{
    return db('books').where({'id':id});
}

const _createBook = (title, author, publishedyear ) => {
    console.log(title, author, publishedyear );
    return db('books').insert({ title, author, publishedyear });
  };

module.exports = { 
    _getAllBooks,
    _getBookById,
    _createBook,
}