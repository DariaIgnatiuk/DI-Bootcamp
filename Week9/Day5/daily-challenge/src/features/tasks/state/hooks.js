import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "./selectors";
import { useCallback } from "react"; //for dispatch
import { add, remove, complete, edit} from "./slice";

export const useTasksSelector = () => {
    return useSelector(selectTasks)
}

export const useAddTask = () => {
    const dispatch = useDispatch();
    return useCallback((task, category)=> {
        dispatch(add(task, category));
    },[dispatch]);
}

export const useRemoveTask = () => {
    const dispatch = useDispatch();
    return useCallback((id)=> {
        dispatch(remove(id));
    },[dispatch]);
}

export const useCompleteTask = () => {
    const dispatch = useDispatch();
    return useCallback((id)=> {
        dispatch(complete(id));
    },[dispatch]);
}

export const useEditTask = () => {
    const dispatch = useDispatch();
    return useCallback((id, text)=> {
        dispatch(edit(id, text));
    },[dispatch]);
}