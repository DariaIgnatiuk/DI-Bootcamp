import { useEditCategory } from "./state/hooks";
import { useState } from "react";

const EditCategory =({category}) => {
    const callEditCategory = useEditCategory();
    const [visibility, setVisibility ] = useState(false);

    const editCategory = (e) => {
        e.preventDefault();
        const editedCategory = e.target.editedText.value;
        callEditCategory(category, editedCategory);  
        changeVisibility();
    }

    const changeVisibility = () => {
        setVisibility(!visibility);
    }

    return (
        <>
        <button onClick={()=>changeVisibility()}>Edit</button>
        {visibility? 
        <form  onSubmit={(event => editCategory(event))}>
            <input name='editedText'/>
            <input type='submit' value='save'/>
        </form> : null}
        </>
    )
}

export default EditCategory


