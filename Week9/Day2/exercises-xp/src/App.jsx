import TasksList from './components/TaskList'
import {useRef} from 'react'
import {connect} from "react-redux"
import {add_task} from './redux/actions'
import React from "react";


import './App.css'

function App(props) {

  const inputRef = useRef();

  const addTask = () => {
    const value = inputRef.current.value;
    props.myAdd(value);
    inputRef.current.value = '';
  }

  return (
    <>
        <h2>Task Manager</h2>

        <div>
         <input placeholder="Add Task..." ref={inputRef}/>
          <button onClick={()=>addTask()}>Add</button>
        </div>
      <TasksList/>
    </>
  )
}



const mapDispatchToProps = (dispatch) => {
    return {
       
        myAdd: (value) => dispatch(add_task(value))  
    }}


export default connect(undefined, mapDispatchToProps)(App)
