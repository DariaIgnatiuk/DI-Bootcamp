import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    tasks:[],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add:(state, action) => {
            state.tasks.push({
                id:nanoid(),
                task:action.payload.task, 
                active: true, 
                dueDate: action.payload.dueDate});
            state.tasks = state.tasks.sort((a,b)=> new Date(a.dueDate)- new Date(b.dueDate))
        },
        remove:(state, action) => {
           state.tasks =  state.tasks.filter((task) => task.id!== action.payload);
        },
        complete:(state, action) => {
            state.tasks.map(task=> {if (task.id ===action.payload) {task.active = !task.active}})
        },
        clearAll:(state) =>{
            state.tasks = []
        },
        edit:(state, action) => {
            state.tasks.map(task=> {if (task.id ===action.payload.id) {task.task = action.payload.text}})
            
        }
    }
})

export const {add, remove, complete, clearAll, edit} = tasksSlice.actions;
export default tasksSlice.reducer;