const express = require('express');
const {registerUser, loginUser, getAllUsers, getUserById, updateUser} = require('../controllers/controller.js')

const router = express.Router();


// POST /register: Allow users to register by providing a username and password. 
router.post('/register', registerUser)

// POST /login: Allow users to login by providing their username and password. 
router.post('/login', loginUser)

// GET /users: Retrieve a list of all registered users from the database
router.get('/users',  getAllUsers);

// GET /users/:id: Retrieve a specific user by ID from the database
router.get("/users/:id", getUserById);

// PUT /users/:id: Update a users information by ID in the database
router.put("/users/:id", updateUser);

module.exports = router;
