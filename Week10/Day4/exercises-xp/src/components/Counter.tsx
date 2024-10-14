import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <>
        <p>Count = {count}</p>
        <button onClick={()=> setCount((prev) => prev + 1)}>+</button>
        <button onClick={()=> setCount((prev) => prev - 1)}>-</button>
        </>
    )
}

export default Counter