import TasksList from "./TasksList"
import TaskInput from "./TaskInput"
import ClearAll from "./ClearAll"

const Tasks = (props) => {

    return (
        <>
        <h2>Tasks</h2>
        <TaskInput/>
        <TasksList/>
        <br/>
        <ClearAll/>
        </>
    )
} 

export default Tasks