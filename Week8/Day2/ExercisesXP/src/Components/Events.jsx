import { useState } from 'react';

const Events = (props) => {
    const [isToggleOn, setisToggleOn] = useState(true);

    const clickMe= (e) => {
        alert("I was clicked");
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            alert(`The Enter key was pressed, your input is: ${e.target.value}`)
        }
    }

    const switchToggle = (e) => {
        setisToggleOn(!isToggleOn);
        isToggleOn? e.target.innerHTML="ON": e.target.innerHTML="OFF"
        
    }
    return(
        <>
        <button onClick={(e)=>clickMe(e)}>Click me</button>
        <br/>
        <input placeholder="Press the ENTER key!" onKeyDown={(e)=>handleKeyDown(e)}/>
        <br/>
        <button onClick={(e)=>switchToggle(e)}>ON</button>
        </>
    )
}

export default Events;