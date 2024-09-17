const express = require('express');
const app = express();
const router = require('./routes/router.js')


const PORT = 3001;
app.listen(3001, ()=>{
    console.log(`run on ${PORT}`);
});

/**body parser should be on top*/
app.use(express.json())

app.use('/', router)
app.use('/static', express.static(__dirname + '/public/'));
app.use('/register', express.static(__dirname + '/public/register.html'));
app.use('/login', express.static(__dirname + '/public/login.html'));