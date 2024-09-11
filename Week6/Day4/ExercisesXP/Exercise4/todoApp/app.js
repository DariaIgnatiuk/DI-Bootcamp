const ToDoList = require('./todo')

let toDoList1 = new ToDoList();
toDoList1.addTask('Do the laundry');
toDoList1.addTask('Finish the book');
toDoList1.addTask('Do your homework');
toDoList1.markCompleted('Finish the book');
toDoList1.listAllTasks();