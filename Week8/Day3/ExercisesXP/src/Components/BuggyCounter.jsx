import { useState } from "react"

const BuggyCounter = (props) => {
    // const {count} = props
    const [count, setCount] = useState(0)
    if (count > 5) {
        throw new Error('I crashed!')
    }
    
    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
        <button onClick={()=>handleClick()}> {count} </button>
        </>
    )
}

export default BuggyCounter