import { ReactElement} from "react";

type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => JSX.Element 
}

const List = <T,>({items, renderItem}:ListProps<T>):ReactElement => {
    return(
        <>
        <h2>List of ToDos</h2>
        <ul>
            {items.map((item)=> {
                return renderItem(item);
            })}
        </ul>
        </>
    )
}

export default List