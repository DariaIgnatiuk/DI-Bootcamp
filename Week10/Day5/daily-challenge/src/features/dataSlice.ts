import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {RecipeData, Recipe} from '../types/types'
import {fetchRecipeFromApi} from '../api/api'

const initialState: RecipeData = {
    recipe:{
        Meal: '',
        Ingrediants: '',
        Intruction: ''
    },
    status:'success'
}


export const recipeFetch = createAsyncThunk('posts/fetch', async(value:string) => {
    const response = fetchRecipeFromApi(value)
    return response
});

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers:{
    },
    extraReducers(builder){
        builder
        .addCase(recipeFetch.fulfilled,(state, action)=> {
            state.status ='success';
            state.recipe = action.payload;
        }  )
        .addCase(recipeFetch.rejected,(state)=> {
            state.status ='failed';
        }  )
        .addCase(recipeFetch.pending,(state)=> {
            state.status ='pending';
        }  )
    }

})

export const {  } = recipeSlice.actions;
export default recipeSlice.reducer;