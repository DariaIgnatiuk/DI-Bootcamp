import {useSelector, useDispatch} from 'react-redux'
import { ageUpAsync, ageDownAsync } from './state/slice';


const AgeCounter = (props) => {

    const age = useSelector(state => state.ageReducer.age);
    const status = useSelector(state => state.ageReducer.status);
    const dispatch = useDispatch();

    if (status === 'pending')  return <img src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif'/>

    if (status === 'failed') return <h2>Try again...</h2>
    return (
        <>
        <h2>Your age: {age}</h2>
        <button onClick={()=>dispatch(ageUpAsync())}>Age Up</button>
        <button onClick={()=>dispatch(ageDownAsync())}>Age Down</button>

        </>
    )
}

export default AgeCounter