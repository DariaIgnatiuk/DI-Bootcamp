const express = require('express');
const router = require('./routes/quiz.router.js');

const app = express();
const PORT = 3000;
app.listen(3000, ()=>{
    console.log(`run on ${PORT}`);
});

/**body parser should be on top*/
app.use(express.json());

app.use('/quiz', router);
app.use('/', express.static(__dirname + '/public'));