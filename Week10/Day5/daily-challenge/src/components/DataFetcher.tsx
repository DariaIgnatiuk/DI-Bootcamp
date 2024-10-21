import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipeFetch} from '../features/dataSlice';
import { Recipe, AppDispatch} from '../types/types';



const DataFetcher = () => {
    const dispatch = useDispatch<AppDispatch>();
    const recipe: Recipe = useSelector((state:Recipe) => state.recipeReducer.recipe as Recipe);
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        dispatch(recipeFetch('apple pie'))
    }, []);

    const fetchRecipe = () => {
        if (inputRef.current?.value) {
            dispatch(recipeFetch(inputRef.current.value))
        }

    }

  return (
    <div>
        <h2>Recipe Search</h2>
        <input placeholder='search for ...' ref={inputRef}/>
        <button onClick={fetchRecipe}>Search</button>
        <h3>Recipe: {recipe.Meal}</h3>
        <p><strong>Ingrediants:</strong> {recipe.Ingrediants}</p>
        <p><strong>Instructions: </strong>  {recipe.Intruction}</p>
    </div>
  );
};

export default DataFetcher;