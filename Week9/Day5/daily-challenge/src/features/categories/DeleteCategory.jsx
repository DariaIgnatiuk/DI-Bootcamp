import { useRemoveCategory } from "./state/hooks"

const DeleteCategory = ({category}) => {
    const callRemoveCategory = useRemoveCategory();
    
    return (
        <>
        <button onClick={()=>callRemoveCategory(category)}> X </button> 
        </>
    )
}

export default DeleteCategory