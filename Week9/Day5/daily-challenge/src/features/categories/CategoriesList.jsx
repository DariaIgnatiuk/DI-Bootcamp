import {useCategoriesSelector} from './state/hooks.js'
import DeleteCategory from './DeleteCategory.jsx';
import EditCategory from './EditCategory.jsx';

const CategoriesList = (props) => {
    const categories = useCategoriesSelector();

    return (
        <>
        <ul>
        {categories.map((item) => {
            return (
                <li>
                 {item} {'  '}
                 <EditCategory category={item}/> {'  '}
                 <DeleteCategory category={item}/>
                </li>
            )
        })}
        </ul>
        </>
    )

}

export default CategoriesList;