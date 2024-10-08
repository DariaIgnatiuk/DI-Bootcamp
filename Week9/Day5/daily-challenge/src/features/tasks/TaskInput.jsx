import { useRef } from "react"
import { useAddTask } from "./state/hooks";
import {useCategoriesSelector} from '../categories/state/hooks.js'


const TaskInput = (props) => {
    const inputRef = useRef();
    const categoryRef = useRef();
    const callAddTask = useAddTask();
    const categories = useCategoriesSelector();

    const addTask = () => {
        const task = inputRef.current?.value.trim();
        const category = categoryRef.current.value;
        if (task === '') return;
        callAddTask({task, category});
        inputRef.current.value = '';
    }

    return (
        <>
            <input ref={inputRef} placeholder="Add task ..."/>
            <select ref={categoryRef}>
            <option value={''}>Select Category...</option>
            {categories.map(item =>{
                return <option>{item}</option>
            })}
        </select>
            <button onClick={()=>addTask()}>Add Task</button>
        </>
    )
}

export default TaskInput