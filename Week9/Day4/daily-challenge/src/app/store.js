import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ageReducer from '../features/age-counter/state/slice.js'

const appreducer = combineReducers({
    ageReducer,
})

const store = configureStore({
    reducer: appreducer,
})

export default store;