import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersReducer from "../features/users/state/slice.js";

const appreducer = combineReducers({
    usersReducer,
})




const store = configureStore({
    reducer: appreducer,
})

export default store;