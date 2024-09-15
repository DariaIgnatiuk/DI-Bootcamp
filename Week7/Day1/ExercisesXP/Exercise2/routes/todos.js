const express = require('express');
const router = express.Router();

const todos = [
    {id:1, task:'water the plant'},
    {id:2, task:'do your homework'},
    {id:3, task:'cook pasta'},
    {id:4, task:'pay the bills'},
];

// Get all to-do items
router.get('/todos', (req, res) =>{
    res.json(todos);
});

// Add a new to-do item
router.post("/todos", (req, res) => {
    console.log(req.body);
    const {task} = req.body;
    const newTaks = {id: todos.length + 1, task};
    todos.push(newTaks);
    res.json(todos);
  });

// Update a to-do item by ID
router.put("/todos/:id", (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    const index = todos.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "task to update not found" });
    }
    todos[index] = { ...todos[index], task};
    res.json({ todos, activ: true, status: 3 });
  });


// Delete a to-do item by ID
router.delete("/todos/:id", (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "task to delete not found" });
    }
    todos.splice(index, 1);
    res.json(todos);
  });



module.exports = router;