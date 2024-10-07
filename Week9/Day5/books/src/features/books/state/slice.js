import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    books: [
        { id: 1, title: 'The Shining', author: 'Stephen King', genre: 'horror' },
        { id: 2, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'fantasy' },
        { id: 3, title: 'Dune', author: 'Frank Herbert', genre: 'science fiction' },
        { id: 4, title: 'The Hitchhikers Guide to the Galaxy', author: 'Douglas Adams', genre: 'science fiction' },
        { id: 5, title: 'The Name of the Wind', author: 'Patrick Rothfuss', genre: 'fantasy' },
        { id: 6, title: 'The Martian', author: 'Andy Weir', genre: 'science fiction' },
        { id: 7, title: 'The Stand', author: 'Stephen King', genre: 'horror' },
        { id: 8, title: 'Harry Potter and the Sorcerers Stone', author: 'J.K. Rowling', genre: 'fantasy' },
        { id: 9, title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'science fiction' },
        { id: 10, title: 'The Dark Tower', author: 'Stephen King', genre: 'fantasy' },
        { id: 11, title: 'The Foundation', author: 'Isaac Asimov', genre: 'science fiction' },
        { id: 12, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', genre: 'adventure' },
        { id: 13, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'romance' },
        { id: 14, title: '1984', author: 'George Orwell', genre: 'dystopian' },
        { id: 15, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'classic' },
        { id: 16, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'classic' },
        { id: 17, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'classic' },
        { id: 18, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'horror' },
        { id: 19, title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', genre: 'childrens' },
        { id: 20, title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'classic' }
      ]
};




const booksSlice = createSlice({
    name:'books',
    initialState: initialState,
    reducers: {},
})

export const state = (state) => state.booksReducer;

export const {} = booksSlice.actions;
export default booksSlice.reducer;