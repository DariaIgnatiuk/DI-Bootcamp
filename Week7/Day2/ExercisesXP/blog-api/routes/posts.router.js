const express = require('express');
const {getAllPosts, getPostById, createPost, updatePost, deletePost} = require('../controllers/posts.controller.js')

const router = express.Router();


//Get all posts
router.get('/',  getAllPosts);

//get post by ID
router.get("/:id", getPostById);

/** Create new post - POST */
router.post("/", createPost);

/** update post */
router.put("/:id", updatePost);

/**delete post*/
router.delete("/:id", deletePost);

module.exports = router;
