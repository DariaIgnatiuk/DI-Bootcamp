const express = require('express');
const app = express();

const PORT = 5001;
app.listen(5001, ()=>{
    console.log(`run on ${PORT}`);
});

/**body parser should be on top*/
app.use(express.json());
app.use('/', express.static(__dirname + '/public'))