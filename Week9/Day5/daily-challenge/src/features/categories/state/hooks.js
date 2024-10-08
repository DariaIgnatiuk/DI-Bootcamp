import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "./selectors";
import { useCallback } from "react"; //for dispatch
import { remove, add, edit} from "./slice";

export const useCategoriesSelector = () => {
    return useSelector(selectCategories)
}

export const useRemoveCategory = () => {
    const dispatch = useDispatch();
    return useCallback((category)=> {
        dispatch(remove(category));
    },[dispatch]);
}

export const useAddCategory = () => {
    const dispatch = useDispatch();
    return useCallback((category)=> {
        dispatch(add(category));
    },[dispatch]);
}

export const useEditCategory = () => {
    const dispatch = useDispatch();
    return useCallback((category, editedCategory)=> {
        dispatch(edit({category, editedCategory}));
    },[dispatch]);
}