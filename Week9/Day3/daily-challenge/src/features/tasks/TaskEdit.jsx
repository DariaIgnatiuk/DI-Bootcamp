import {useDispatch} from 'react-redux'
import {edit} from './state/slice.js'
import { useState } from "react";

const TaskEdit = ({id}) => {

    const dispatch = useDispatch();
    const [visibility, setVisibility ] = useState(false);

    const editTask = (e) => {
        e.preventDefault();
        const text = e.target.editedText.value;
        dispatch(edit({id, text}));  
        changeVisibility();
    }

    const changeVisibility = () => {
        setVisibility(!visibility);
    }
    return (
        <>
        <button onClick={()=>changeVisibility()}>Edit</button>
        {visibility? 
        <form  onSubmit={(event => editTask(event))}>
        <input name='editedText'/>
        <input type='submit' value='save'/>
        </form> : null}
        </>
    )
}

export default TaskEdit;