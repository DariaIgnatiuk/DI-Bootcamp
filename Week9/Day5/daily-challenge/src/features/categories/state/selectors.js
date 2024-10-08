import { createSelector } from "@reduxjs/toolkit";
import {state} from './slice'


export const selectCategories = createSelector([state], (state)=> state.categories);
