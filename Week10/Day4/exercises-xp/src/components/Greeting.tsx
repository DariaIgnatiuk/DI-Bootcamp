import {ReactElement} from 'react'

type GreetingProps = {
    name:string
}

const Greeting = ({name}:GreetingProps):ReactElement =>{
    return (
        <>
        <h2>Hello, {name}!</h2>
        </>
    )
}

export default Greeting