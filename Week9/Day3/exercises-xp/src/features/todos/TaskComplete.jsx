import {useDispatch} from 'react-redux'
import {complete} from './toDoSlice'

const TaskComplete = ({id}) => {
    const dispatch = useDispatch();

    return(
        <>
        <input type="checkbox" onChange={()=>dispatch(complete(id))}/>  
        </>
    );
};

export default TaskComplete;