import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    tasks:[
        { id: nanoid(), task: 'Write report', active: true, category: 'work'},
        { id: nanoid(), task: 'Do the laundry', active: true, category: 'home' },
        { id: nanoid(), task: 'Cook dinner', active: true, category: 'home'  },
        { id: nanoid(), task: 'Pick up package', active: true, category: 'chores'  },
        { id: nanoid(), task: 'Hebrew HW', active: true, category: 'studies'  }
    ],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add:(state, action) => {
            state.tasks.push({
                id:nanoid(),
                task:action.payload.task, 
                category: action.payload.category,
                active: true});
                console.log(action.payload);
                
        },
        remove:(state, action) => {
           state.tasks =  state.tasks.filter((task) => task.id!== action.payload);
        },
        complete:(state, action) => {
            state.tasks.map(task=> {if (task.id ===action.payload) {task.active = !task.active}})
        },
        edit:(state, action) => {
            console.log(action.payload);
            state.tasks.map(task=> {if (task.id ===action.payload.id) {task.task = action.payload.text}})   
        }
    }
})


export const state = (state) => state.tasksReducer;
export const {add, remove, complete, edit} = tasksSlice.actions;
export default tasksSlice.reducer;