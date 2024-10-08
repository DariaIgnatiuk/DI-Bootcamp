import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasksReducer from '../features/tasks/state/slice.js'
import categoriesReducer from '../features/categories/state/slice.js'

const appreducer = combineReducers({
    tasksReducer,
    categoriesReducer
})

const store = configureStore({
    reducer: appreducer,
})

export default store;