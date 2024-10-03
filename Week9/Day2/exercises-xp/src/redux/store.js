import {createStore, combineReducers} from 'redux';

import { tasksReducer } from './reducers';

const reducer = combineReducers({
    tasksReducer,
})

const store = createStore(reducer);

export default store;