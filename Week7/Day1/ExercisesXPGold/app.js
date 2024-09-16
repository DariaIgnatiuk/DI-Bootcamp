const express = require('express');
const router = require('./routes/router.js');

const app = express();
const PORT = 3000;
app.listen(3000, ()=>{
    console.log(`run on ${PORT}`);
});

/**body parser should be on top*/
app.use(express.json());

app.use('/posts/', router);
