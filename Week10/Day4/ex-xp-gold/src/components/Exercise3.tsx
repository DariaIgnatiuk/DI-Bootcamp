import {useState, useEffect} from 'react'
import {useCounter} from './useCounter'

const Exercise3 = () => {
    const [name, setName] = useState('');
    const [count, increment, decrement] = useCounter();

    const fetchName = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setName(data[0].name);
    }

    useEffect(() =>{
     fetchName();
    },[])


    return (
        <div>
            <h2>Exercise 3: Counter with State Hook</h2>
            <h2>Name: {name}</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Exercise3