import { createSelector } from "@reduxjs/toolkit";
import {state} from './slice'


export const selectTasks = createSelector([state], (state)=> state.tasks);
