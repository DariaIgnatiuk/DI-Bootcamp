import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    age:35,
    status:'',
}

export const ageUpAsync = createAsyncThunk('age/up', () => {
    return new Promise ((res, rej) => {
        setTimeout(()=> {
            res(1);
        }, 2 * 1000);
    });
});

export const ageDownAsync = createAsyncThunk('age/down', () => {
    return new Promise ((res, rej) => {
        setTimeout(()=> {
            res(1);
        }, 2 * 1000);
    });
});


const ageSlice = createSlice({
    name:'age',
    initialState: initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase (ageUpAsync.fulfilled, (state, action) => {
            state.age += 1
            state.status ='success'
        })
        .addCase(ageUpAsync.rejected, (state, action) => {
            state.status = 'failed'
        })
        .addCase(ageUpAsync.pending, (state) => {
            state.status = 'pending'
        })
        .addCase (ageDownAsync.fulfilled, (state, action) => {
            state.age -= 1
            state.status ='success'
        })
        .addCase(ageDownAsync.rejected, (state, action) => {
            state.status = 'failed'
        })
        .addCase(ageDownAsync.pending, (state) => {
            state.status = 'pending'
        })
    }
})

export const {} = ageSlice.actions;
export default ageSlice.reducer;