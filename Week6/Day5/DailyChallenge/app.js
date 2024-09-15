const express = require('express');
const app = express();

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];

//port 5000 is being used on by laptop, so I changed it to 5001
const PORT = 5001;
app.listen(5001, ()=>{
    console.log(`run on ${PORT}`);
});

/**body parser should be on top*/
app.use(express.json());