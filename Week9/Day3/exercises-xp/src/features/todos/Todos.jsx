import { useRef } from "react";
import {useDispatch} from 'react-redux'
import {add} from './toDoSlice'
import TasksList from "./TaskList";

const Todos = (props) => {

    const inputRef = useRef();
    const dispatch = useDispatch();

    const addTask = () => {
        const task = inputRef.current.value;
        dispatch(add({task}));
        inputRef.current.value = '';
      }

    return (
        <>
        <h2>Task Manager</h2>

        <div>
            <input placeholder="Add Task..." ref={inputRef}/>
            <button onClick={()=>addTask()}>Add</button>
        </div>
        <div>
            <h2>List of Tasks</h2>
            <TasksList/>
        </div>
        </>
    )
}

export default Todos;