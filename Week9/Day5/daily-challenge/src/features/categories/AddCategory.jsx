import { useRef } from "react"
import {useAddCategory} from '../categories/state/hooks.js'


const AddCategory = (props) => {
    const inputRef = useRef();
    const callAddCategory = useAddCategory()

    const addCategory = () => {
        const category = inputRef.current?.value.trim();
        if (category === '') return;
        callAddCategory(category)
        inputRef.current.value = '';
    }

    return (
        <>
            <input ref={inputRef} placeholder="Add category ..."/>
            <button onClick={()=>addCategory()}>Add Category</button>
        </>
    )
}

export default AddCategory