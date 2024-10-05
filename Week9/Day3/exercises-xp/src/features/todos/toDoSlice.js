import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[],
}

const todoSlice = createSlice({
    name:'todos',
    initialState: initialState,
    reducers: {
        add:(state, action) => {
            state.todos.push({id:nanoid(),task:action.payload.task, active: true });
        },
        remove:(state, action) => {
            state.todos = state.todos.filter(task => task.id!== action.payload);
        },
        complete:(state, action) => {
            state.todos.map(task=> {if (task.id ===action.payload) {task.active = !task.active}})
        },
    }
})

export const {add, remove, complete} = todoSlice.actions;
export default todoSlice.reducer;