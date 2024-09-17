const express = require('express');
const {getAllTasks, getTaskById, createTask, updateTask, deleteTask} = require('../controllers/tasks.controller.js')

const router = express.Router();


//Get all tasks
router.get('/',  getAllTasks);

//get task by ID
router.get("/:id", getTaskById);

/** Create new task - POST */
router.post("/", createTask);

/** update task */
router.put("/:id", updateTask);

/**delete task*/
router.delete("/:id", deleteTask);

module.exports = router;
