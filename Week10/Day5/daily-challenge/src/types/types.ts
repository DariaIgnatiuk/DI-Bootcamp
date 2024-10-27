import store from "../features/store";

export interface Recipe {
    // recipeReducer?: any;
    Meal: string;
    Ingrediants:string;
    Intruction:string;
}


export interface RecipeData {
    recipe: Recipe;
    status: 'success' | 'failed' | 'pending'
}

export type AppDispatch = typeof store.dispatch;