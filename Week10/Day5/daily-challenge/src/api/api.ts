import {Recipe} from '../types/types'


export const fetchRecipeFromApi = async (value:string):Promise<any> => {
    const options = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "X-Api-Key": "idMtG0xTmSJmvjQYQ25lCg==6w34HaPtJOVrLU31"
        },
    }
    try {
        const responce = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${value}`,options)
        const data = await responce.json()   
        const recipe:Recipe = {
            Meal: data[0].title,
            Ingrediants:data[0].ingredients,
            Intruction:data[0].instructions
        }    
        return recipe
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error; 
    }

}


