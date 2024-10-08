import Tasks from './features/tasks/Tasks'
import Categories from './features/categories/Categories';
import './App.css'
import { Route,Routes, Link } from "react-router-dom";


function App() {

  return (
    <>
    <Link to="/tasks">Tasks</Link>{'  '}
    <Link to="/categories">Categories</Link>

    <Routes>
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    </>
  )
}

export default App
