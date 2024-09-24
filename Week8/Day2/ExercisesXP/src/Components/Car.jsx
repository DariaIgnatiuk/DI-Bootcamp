import Garage from "./Garage";

const Car = (props) => {
    return(
        <>
        <h2>This car is {props.color} {props.model}</h2>
        <Garage size="small"/>
        </>
    )
}

export default Car;