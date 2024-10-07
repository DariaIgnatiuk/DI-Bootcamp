import { createSelector } from "@reduxjs/toolkit";
import {state} from './slice'

export const selectBooks = createSelector([state], (state)=> state.books);
export const selectHorrorBooks = createSelector([state], (state)=> state.books.filter(book => book.genre === 'horror'));
export const selectFantasyBooks = createSelector([state], (state)=> state.books.filter(book => book.genre === 'fantasy'));
export const selectScienceFictionBooks = createSelector([state], (state)=> state.books.filter(book => book.genre === 'science fiction'));
