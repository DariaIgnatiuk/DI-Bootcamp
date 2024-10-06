import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react';
import {fetchUsers}  from './state/slice.js';

const Users = (props)=> {
    const users = useSelector(state => state.usersReducer.users);
    const status = useSelector(state => state.usersReducer.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);


    if (status === 'loading') return <h2>Loading...</h2>
    if (status === 'failed') return <h2>Try again...</h2>
    return (
        <>
        <div>
            {users.map((item)=>{
                return (
                    <div key={item.id}>{item.name} - {item.email}</div>
                )
            })}
        </div>
        </>
    )

}

export default Users