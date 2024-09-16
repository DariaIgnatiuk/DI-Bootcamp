const {_getAllPosts, _getPostById, _createPost, _updatePost, _deletePost} = require('../models/posts.model.js')

const getAllPosts = (req, res) =>{
    _getAllPosts()
  .then(data => {
    res.json(data);
  })
  .catch((e) =>{
    console.log(e);
  })
}

const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await _getPostById(id)
      res.json(data)
    } catch (error) {
      res.status(404).json({message:'No post with such id'})
    }

}

const createPost = async (req, res) => {
    console.log(req.body);
    const { title, content } = req.body;
    try {
      const data = await _createPost(title,content);
      getAllPosts(req,res);
    } catch (error) {
      res.status(402).json({message:"something is wrong"})
    }
  }

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title,  content } = req.body;
    try {
        const data = await _updatePost(title, content, id);
        getAllPosts(req,res);
    } catch (error) {
        res.status(404).json({ message: "post to update not found" });
    }
  }

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _deletePost(id);
        getAllPosts(req,res);
    } catch (error) {
        res.status(404).json({ message: "post to delete not found" });
    }
  }

module.exports = {
    getAllPosts, 
    getPostById, 
    createPost,
    updatePost,
    deletePost
}