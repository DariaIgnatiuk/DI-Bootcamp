import { useContext } from "react";
import { TasksContext } from "../App";
import { COMPLETE_TASK } from "../App";

const TaskComplete = ({id}) => {
    const { dispatch } = useContext(TasksContext);
    const { state } = useContext(TasksContext);

    const completeTask = () => {
        dispatch({type: COMPLETE_TASK, id} )
    }

    const task = state.tasks.find(task => task.id === id);
    
    return(
        <>
        {(task.active)?  (<input type="checkbox" onChange={()=>completeTask()}/>):
        (<input type="checkbox" checked onChange={()=>completeTask()}/>)
        }
            
        </>
    );
};

export default TaskComplete;