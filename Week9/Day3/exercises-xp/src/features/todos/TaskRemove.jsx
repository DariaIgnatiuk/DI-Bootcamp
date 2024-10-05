import {useDispatch} from 'react-redux'
import {remove} from './toDoSlice'

const TaskRemove = ({id}) => {
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(remove(id));  
    }

    return(
        <>
        <button onClick={()=>removeTask()} > X </button>
        </>
    );
};



export default TaskRemove;