import { useState, useEffect } from 'react';

const Color = (props) => {
    const [color, setColor] = useState('red');

    useEffect(() => {
        alert('useEffect reached')
        setColor('yellow');
      }, [])

    return (
        <>
        <h2>My Favorite Color is <i>{color}</i></h2>
        <button onClick={(e)=>setColor('blue')}>Change Color</button>
        </>
    )
}

export default Color;