let  posts  = [
  {id:1, title:'hello', content:'hello there!', timestamp:'15/09/2024'},
  {id:2, title:'buy', content:'See you later!', timestamp:'15/09/2024'}
];


const getAllPosts = (req, res) =>{
    console.log(posts);
    res.json(posts);
}

const getPostById = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const myPost = posts.find((item) => item.id == id);
  if (!myPost) return res.sendstatus(404);
  res.json(myPost);
}

const createPost = (req, res) => {
    console.log(req.body);
    const { title, content } = req.body;
    const timestamp = new Date();
    const newPost = {id: posts.length + 1, title, content, timestamp};
    posts.push(newPost);
    res.json(posts);
  }

const updatePost = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const timestamp = new Date();
    const index = posts.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "post to update not found" });
    }
    posts[index] = { ...posts[index], title, content, timestamp};
    res.json({ posts, activ: true, status: 3 });
  }

const deletePost = (req, res) => {
    const { id } = req.params;
    const index = posts.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "post to delete not found" });
    }
    posts.splice(index, 1);
    res.json(posts);
  }


module.exports = { 
  getAllPosts, getPostById, createPost, updatePost, deletePost}