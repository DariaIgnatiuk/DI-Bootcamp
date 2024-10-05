import TasksList from './components/TaskList'
import {useRef, useState} from 'react'
import {connect} from "react-redux"
import {add_task} from './redux/actions'
import React from "react";
import Calendar from 'react-calendar';
import './App.css'

function App(props) {

  const inputRef = useRef();
  const dateRef = useRef();

  const addTask = () => {
    const value = inputRef.current.value;
    props.myAdd([value, pickedDate]);
    inputRef.current.value = '';
  }
  const [dateValue, setDateValue] = useState(new Date());
  let pickedDate = [dateValue.getDate(), dateValue.getMonth() + 1, dateValue.getFullYear()]

  return (
    <>
        <h2>Task Manager</h2>
        <Calendar
      value={dateValue}
      onChange={setDateValue}
      ref={dateRef}
    />
    
    <div>The date you picked: {pickedDate[0]}-{pickedDate[1]}-{pickedDate[2]} </div>

        <div>
         <input placeholder="Add Task..." ref={inputRef}/>
          <button onClick={()=>addTask()}>Add</button>
        </div>
      <TasksList date={pickedDate}/>
    </>
  )
}



const mapDispatchToProps = (dispatch) => {
    return {
        myAdd: (value) => dispatch(add_task(value)),
    }}

  
  
export default connect(undefined, mapDispatchToProps)(App)
