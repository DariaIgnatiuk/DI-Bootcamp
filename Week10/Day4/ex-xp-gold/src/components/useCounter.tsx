import { useState } from 'react'

export const useCounter = (): [number, () => void, () => void] => {
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    return [count, increment, decrement]
}

