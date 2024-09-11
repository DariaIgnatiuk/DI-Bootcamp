class TodoList {
    constructor() {
      this.allTasks = [];
    }
  
    addTask(task) {
      this.allTasks.push({
        text: task,
        completed: false,
      });
    }
  
    markCompleted(completedTask) {
      for (let task of this.allTasks){
        if (task.text === completedTask) {
            task.completed = true;
        }
      }
    }
  
    listAllTasks() {
      console.log(this.allTasks);
    }
  }

module.exports = TodoList;