import React, { useReducer, useState, useRef } from "react";
import './App.css'

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text, status: false }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      // Edit a todo by its id
      return state.map((todo) =>
        todo.id === action.id? {...todo, text: action.text} : todo
      );
    case "COMPLETE_TODO":
      return state.map((todo) =>
        todo.id === action.id? {...todo, state:!state} : todo
      );  
    case "FILTER_TASKS":
      console.log(action.filter);
      
      if (action.filter === "all") {return state}
      else if (action.filter === "completed") 
        { return state.filter((todo) => todo.status === true)}
      else if (action.filter === "active")
        { return state.filter((todo) => todo.status === false)}
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const inputRef = useRef(null);


  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleCompleteTodo = (id) => {
    dispatch({ type: "COMPLETE_TODO", id });
  };

  const handleEditTodo = (id) => {
    setShowInput(true);
    setShowButton(false)
    inputRef.current.value = todos.find((todo) => todo.id === id).text;
  };

  const handleSaveEditedTodo = (id) => {
    dispatch({ type: "EDIT_TODO", id,  text: inputRef.current.value});
    setShowInput(false);
    setShowButton(true)
  };

  const handleFilter = (type) => {
    dispatch({ type: "FILTER_TASKS", filter: type});
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <h3>Filter</h3>
      <input type="radio" id="all" name="filter" value="all" checked onChange={()=>{handleFilter('all')}}/> 
      <label htmlFor="all">Show all</label>
      <input type="radio" id="completed" name="filter" value="completed" onChange={()=>{handleFilter('completed')}}/>
      <label htmlFor="completed">Show completed</label>
      <input type="radio" id="incompleted" name="filter" value="incompleted" onChange={()=>{handleFilter('incompleted')}}/>
      <label htmlFor="incompleted">Show incompleted</label>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type='checkbox' onChange={()=>{handleCompleteTodo(todo.id)}}/>
            {todo.text}
            <input ref={inputRef} className={showInput? 'notHidden': 'hidden'}/>
            <button className={showButton? 'notHidden': 'hidden'} onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button className={showButton? 'hidden': 'notHidden'} onClick={() => handleSaveEditedTodo(todo.id)}>Save</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;