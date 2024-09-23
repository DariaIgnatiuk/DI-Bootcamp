import { useState } from 'react'
import './App.css'
import UserFavovireAnimals from './components/UserFavoriteAnimals';
import Exercise from './components/Exercise3';


function App() {
  const [count, setCount] = useState(0);
  // const myelement = <h1>I Love JSX!</h1>;
  // const sum = 5 + 5;
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <>
    {/* Exercise 1: with JSX */}
    {/* <p>Hello World!</p>
    {myelement}
    <p>"React is {sum} times better with JSX"</p> */}

    {/* Exercise 2 : Object */}
    {/* <p>{user.firstName} {user.lastName}</p>
    <UserFavovireAnimals animals={user.favAnimals}/> */}
    <Exercise/>
    </>
  )
}

export default App
