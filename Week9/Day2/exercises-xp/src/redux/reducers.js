import {  ADD_TASK, COMPLETE_TASK, DELETE_TASK} from "./actions";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks:[],
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            const newTask = [...state.tasks];
            newTask.push({id: uuidv4(), name:action.payload, active:true});
            return {...state, tasks: newTask};
        case COMPLETE_TASK:
            const updatedTasks = state.tasks.map(task => task.id === action.payload? {...task, active:!task.active} : task);
            console.log(updatedTasks);
            
            return {...state, tasks: updatedTasks};
        case DELETE_TASK:
            const notDeletedTasks = state.tasks.filter(task => task.id!== action.payload);
            return {...state, tasks: notDeletedTasks};
        default:
            return state;
    }
}
