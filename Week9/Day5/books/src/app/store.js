import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksReducer from '../features/books/state/slice.js'

const appreducer = combineReducers({
    booksReducer,
})

const store = configureStore({
    reducer: appreducer,
})

export default store;