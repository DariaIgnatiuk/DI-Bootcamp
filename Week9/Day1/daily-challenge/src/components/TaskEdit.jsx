import { useContext, useState } from "react";
import { TasksContext } from "../App";
import { EDIT_TASK } from "../App";

const TaskEdit = ({id}) => {
    const { dispatch } = useContext(TasksContext);
    const [visibility, setVisibility ] = useState(false);

    const editTask = (e) => {
        e.preventDefault();
        const text = e.target.editedText.value;
        dispatch({type: EDIT_TASK, id, text});  
        changeVisibility();
    }

    const changeVisibility = () => {
        setVisibility(!visibility);
    }

    return(
        <>
        <button onClick={()=>changeVisibility()}>Edit</button>
        {visibility? 
        <form  onSubmit={(event => editTask(event))}>
        <input name='editedText'/>
        <input type='submit' value='save'/>
        </form> : null}
        </>
    );
};

export default TaskEdit;