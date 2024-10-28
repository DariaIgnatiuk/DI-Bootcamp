import Header from './components/Header'
import Mountain from './components/Mountain'
import Beaches from './components/Beaches'
import Birds from './components/Birds'
import Food from './components/Food'
import Search from './components/Search'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useRef} from 'react'

function App() {

  const searchRef = useRef()

  return (
    <>
    <h1>SnapShot</h1>
    <input placeholder='Search...' id='searchInput'ref={searchRef}/>
        <Link to='search'><button>Search</button></Link>
        <br/>
        <Link to='mountain'><button>Mountain</button></Link>
        <Link to='beaches'><button>Beaches</button></Link>
        <Link to='birds'><button>Birds</button></Link>
        <Link to='food'><button>Food</button></Link>
    <Routes>
      <Route path='/' element={<Mountain/>}/>
      <Route path='/mountain' element={<Mountain/>}/>
      <Route path='/beaches' element={<Beaches/>}/>
      <Route path='/birds' element={<Birds/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/search' element={<Search searchRef={searchRef}/>}/>
    </Routes>

    </>
  )
}

export default App
