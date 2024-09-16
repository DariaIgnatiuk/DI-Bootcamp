const express = require('express');
const app = express();
const postsRouter = require('./routes/books.router.js')


const PORT = 5001;
app.listen(5001, ()=>{
    console.log(`run on ${PORT}`);
});

/**body parser should be on top*/
app.use(express.json())


app.use('/api/books', postsRouter)
