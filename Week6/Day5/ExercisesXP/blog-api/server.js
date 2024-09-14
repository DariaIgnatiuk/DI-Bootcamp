const express = require('express');
const app = express();

const PORT = 3001;
app.listen(3001, ()=>{
    console.log(`run on ${PORT}`);
});

/**body parser should be on top*/
app.use(express.json())

const data = [
    {id:1, title:"Harry Potter and the Philosopher's Stone", content: '000'},
    {id:2, title:"Harry Potter and the Chamber of Secrets", content: '111'},
    {id:3, title:"Harry Potter and the Prisoner od Azkaban", content: '222'}
]

// GET /posts: Return a list of all blog posts.
app.get('/data', (req, res) =>{
    res.json(data);
});

// GET /posts/:id: Return a specific blog post based on its id.
app.get("/data/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const myitem = data.find((item) => item.id == id);
    if (!myitem) return res.status(404).json('item not found')
    res.json(myitem);
});

// POST /posts: Create a new blog post.
app.post('/data',(req, res) => {
    console.log(req.body);
    const {title, content} = req.body;
    const newItem = {title, content, id:data.length +1}
    data.push(newItem);
    console.log(data);
    res.json(data)
})

// PUT /posts/:id: Update an existing blog post.

app.put("/data/:id", (req, res) => {
    const { id } = req.params;
    const { title, content} = req.body;
    const index = data.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "item to update not found" });
    }
    data[index] = { ...data[index], title, content};
    res.json(data);
  });

// DELETE /posts/:id: Delete a blog post.

app.delete("/data/:id", (req, res) => {
    const { id } = req.params;
    const index = data.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "item to delete not found" });
    }
    data.splice(index, 1);
    res.json(data);
  });

