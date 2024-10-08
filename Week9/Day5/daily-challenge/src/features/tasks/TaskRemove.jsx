import { useRemoveTask } from "./state/hooks";

const TaskRemove = ({id}) => {
    const callRemoveTask = useRemoveTask();

    return(
        <>
        <button onClick={()=>callRemoveTask(id)} > X </button>
        </>
    );
};

export default TaskRemove;