import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todosReducer from '../features/todos/toDoSlice'

const appreducer = combineReducers({
    todosReducer,
})

const store = configureStore({
    reducer: appreducer
})

export default store;