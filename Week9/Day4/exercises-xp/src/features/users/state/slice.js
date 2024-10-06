import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    users: [],
    status: ''
}

export const fetchUsers = createAsyncThunk('users/fetch', async() => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();
    return data
});

const usersSlice = createSlice({
    name:'users',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, state => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.status ='success'
        })
        .addCase(fetchUsers.rejected, state => {
            state.status ='failed'
        })
    }
    }
)

export const {} = usersSlice.actions;
export default usersSlice.reducer;