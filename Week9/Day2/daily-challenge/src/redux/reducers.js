import {  ADD_TASK, DELETE_TASK} from "./actions";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks:[],
    pickedDate: []
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            const newTask = [...state.tasks];
            const date = action.payload[1][0] + '-' + action.payload[1][1] + '-' + action.payload[1][2];
            let found = false;
            for (const task of newTask) {                
                if (task[0] === date) {task[1].push({id: uuidv4(), name:action.payload[0], active:true}); found = true;}
            }
            if (!found)  newTask.push([date,[{id: uuidv4(), name:action.payload[0], active:true}]]);
            return {...state, tasks: newTask};
        case DELETE_TASK:
            const filteredTasks = state.tasks.map(task => {
            if (task[0] === action.payload[1]) { // Check for task ID match
                return [task[0], task[1].filter(t => t.id !== action.payload[0])]; // Filter inner array
            } else {
            return task; // Keep other tasks unchanged
            }
            });
  return { ...state, tasks: filteredTasks };
        default:
            return state;
    }
}
