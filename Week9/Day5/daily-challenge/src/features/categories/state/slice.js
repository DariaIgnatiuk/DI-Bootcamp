import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    categories:['work', 'home','studies','chores'],
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        add:(state, action) => {
            if (!state.categories.includes(action.payload)){
            state.categories.push(action.payload);}
        },
        remove:(state, action) => {
            state.categories =  state.categories.filter((element) => element!== action.payload);
        },

        edit:(state, action) => {
            const index = state.categories.indexOf(action.payload.category);
            state.categories[index] = action.payload.editedCategory;
        }
    }
})

export const state = (state) => state.categoriesReducer;
export const {add, remove, edit} = categoriesSlice.actions;
export default categoriesSlice.reducer;