import {useDispatch} from 'react-redux'
import {clearAll} from './state/slice.js'

const ClearAll = (props) => {
    const dispatch = useDispatch();
    return (
    <button onClick={()=> {dispatch(clearAll())}}>Clear all</button>)
}

export default ClearAll