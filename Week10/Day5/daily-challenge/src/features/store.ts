import { configureStore, combineReducers } from "@reduxjs/toolkit";
import recipeReducer from './dataSlice'

const appreducer = combineReducers({
    recipeReducer,
})

const store = configureStore({
    reducer: appreducer
})

export default store;