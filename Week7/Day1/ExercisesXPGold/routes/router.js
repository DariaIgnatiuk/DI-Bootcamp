const express = require('express');
const { getAllPosts, getPostById, createPost, updatePost, deletePost} = require('../controllers/controller.js')
const router = express.Router();


// Get all posts
router.get("/", getAllPosts);


// Get a post by id
router.get("/:id", getPostById);


// Create a new blog post
router.post("/", createPost);

// Update a blogpost by ID
router.put("/:id", updatePost);

// Delete a blogpost by ID
router.delete("/:id", deletePost);


module.exports = router;