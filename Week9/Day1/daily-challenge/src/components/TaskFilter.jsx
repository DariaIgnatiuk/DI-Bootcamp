import { useContext } from "react";
import { TasksContext } from "../App";
import { FILTER_TASK } from "../App";

const TaskFilter = ({id}) => {
    const { dispatch } = useContext(TasksContext);

    const showAllTasks = () => {
        dispatch({type: FILTER_TASK, option:'all'})
    }
    const showCompletedTasks = () => {
        dispatch({type: FILTER_TASK, option:'completed'})
    }
    const showActiveTasks = ()=> {
        dispatch({type: FILTER_TASK, option:'active'})
    }

    return(
        <>
            <button onClick={()=>showAllTasks()}>Show all</button>
            <button onClick={()=>showCompletedTasks()}>Show completed</button>
            <button onClick={()=>showActiveTasks()}>Show active</button>

        </>
    );
};

export default TaskFilter;