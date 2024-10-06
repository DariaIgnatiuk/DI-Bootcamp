import { useRef } from "react"
import {useDispatch} from 'react-redux'
import {add} from './state/slice.js'

const TaskInput = (props) => {
    const inputRef = useRef();
    const dateRef = useRef();
    const dispatch = useDispatch();

    const addTask = () => {
        const task = inputRef.current?.value.trim();
        const dueDate = dateRef.current?.value;
        if (task === '') return;
        dispatch(add({task, dueDate}));
        inputRef.current.value = '';
        dateRef.current.value = '';
    }

    return (
        <>
            <input ref={inputRef} placeholder="Add task ..."/>
            <input type="date" ref={dateRef}/>
            <button onClick={()=>addTask()}>Add Task</button>
        </>
    )
}

export default TaskInput