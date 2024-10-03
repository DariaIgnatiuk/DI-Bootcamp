import { useReducer, createContext, useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import TasksList from "./components/TasksList";
import TaskFilter from "./components/TaskFilter";

export const TasksContext = createContext();

const initialState = {
  tasks: [],
  completedTasks: [],
  activeTasks:[],
  show: 'all'
}

const ADD_TASK = 'add_task';
export const REMOVE_TASK = 'remove_task';
export const EDIT_TASK = 'edit_task';
export const COMPLETE_TASK = 'complete_task';
export const FILTER_TASK = 'filter_task';

const taskReducer = (state, action) => {
  if (action.type === ADD_TASK) {
    const newTask = [...state.tasks];
    newTask.push({id: uuidv4(), name:action.payload, active:true});
    return {...state, tasks: newTask};
  }
  else if (action.type === REMOVE_TASK) {
    const notDeletedTasks = state.tasks.filter(task => task.id!== action.id);
    return {...state, tasks: notDeletedTasks};
  }
  else if (action.type === EDIT_TASK) {
    const updatedTasks = state.tasks.map(task => task.id === action.id? {...task, name: action.text} : task);
    return {...state, tasks: updatedTasks};}
  else if (action.type === COMPLETE_TASK) {
    const updatedTasks = state.tasks.map(task => task.id === action.id? {...task, active:!task.active} : task);
    return {...state, tasks: updatedTasks};}
  else if (action.type === FILTER_TASK) {
    if (action.option === 'all') {
      return {...state, show:'all'}}
    else if (action.option === 'completed') {
      const completedTasks = state.tasks.filter(task => task.active === false);
      return  {...state, completedTasks: completedTasks, show: 'completed' }
    }
    else if (action.option === 'active') {
      const activeTasks = state.tasks.filter(task => task.active === true);
      return  {...state, activeTasks: activeTasks, show:'active'}
    }
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const inputRef = useRef();

  const addTask = () => {
    const value = inputRef.current.value;
    dispatch({type: ADD_TASK, payload: value});
    inputRef.current.value = '';
  }

  return (
    <>
    <TasksContext.Provider value={{state, dispatch}}>
    <h2>Task Manager</h2>

    <div>
      <input placeholder="Add Task..." ref={inputRef}/>
      <button onClick={()=>addTask()}>Add</button>
    </div>
    <div>
      <h2>List of Tasks</h2>
      <TaskFilter/>
      <TasksList/>
    </div>
   </TasksContext.Provider>
    </>
  );
}

export default App;