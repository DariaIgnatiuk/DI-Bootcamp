const express = require('express');
const {fetchPosts} = require('./data/dataService.js')
const app = express();


//port 5000 is being used on by laptop, so I changed it to 5001
const PORT = 5001;
app.listen(5001, ()=>{
    console.log(`run on ${PORT}`);
});

/**body parser should be on top*/
app.use(express.json());


app.get('/posts', async (req, res) =>{
    try {
        const posts = await fetchPosts('https://jsonplaceholder.typicode.com/posts');
        res.json(posts);
        console.log(posts);
    } catch (e) {
        console.log(e);     
    }
});


