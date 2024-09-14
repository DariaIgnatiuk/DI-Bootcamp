const express = require('express');
const app = express();

let books = [
    {id:1, title: "The Fortnight in September", author: 'R.C. Sherriff',  publishedYear:1931},
    {id:2, title: "Harry Potter and the Philosopher's Stone", author: 'J.K.Rowling',  publishedYear:1997},
    {id:3, title: "The Count of Monte Cristo", author: 'Alexandre Dumas',  publishedYear:1844},
    {id:4, title: "A Little Life", author: 'Hanya Yanagihara',  publishedYear:2015}
]

//port 5000 is being used on by laptop, so I changed it to 5001
const PORT = 5001;
app.listen(5001, ()=>{
    console.log(`run on ${PORT}`);
});

/**body parser should be on top*/
app.use(express.json());

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.

app.get('/api/books', (req, res) =>{
    res.json(books);
});

// Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL 
// and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the 
// book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.

app.get("/api/books/:id", (req, res) => {
    const { id } = req.params;
    const myBook = books.find((item) => item.id == id);
    if (!myBook) return res.status(404).json('Book not found')
    res.json(myBook);
});

// Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside 
// the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to 
// the books array and return a JSON response with the new book and a status code of 201 (Created).

app.post('/api/books',(req, res) => {
    console.log(req.body);
    const {title, author, publishedYear} = req.body;
    const newBook = {title, author, publishedYear, id:books.length +1}
    books.push(newBook);
    res.status(201).json(newBook)
})