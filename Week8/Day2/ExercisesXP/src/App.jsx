import { useState } from 'react';
// import Car from './Components/Car'
// import Events from './Components/Events';
// import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  const [color, setColor] = useState('red');

  return (
    <>
    {/* Exercise 1 : Car and components */}
    {/* <Car model={carinfo.model} color={color}/> */}

    {/* Exercise 2 : Events */}
    {/* <Events/> */}

    {/* Exercise 3 : Phone and components */}
    {/* <Phone/> */}

    {/* Exercise 4 : useEffect hook */}
    <Color/>


    </>
  )
}

export default App
