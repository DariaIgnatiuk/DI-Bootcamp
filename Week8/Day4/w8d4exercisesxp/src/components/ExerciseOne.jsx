import {Routes, Route, NavLink } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ErrorBoundary from "./ErrorBoundary";
import ShopScreen from "./ShopScreen";
import "bootstrap/dist/css/bootstrap.min.css";

const ExerciseOne = () => {
    return (
        <>
        <ErrorBoundary>
        <header>
                <nav>
                <NavLink to='/'>Home</NavLink>
                {' ' }
                <NavLink to='/profile'>About</NavLink>
                {' '}
                <NavLink to='/shop'>Shop</NavLink>
              </nav>
              </header>
        
              <Routes>
                <Route path='/' element={<ErrorBoundary><HomeScreen/></ErrorBoundary>}/>
                <Route path='/profile' element={<ErrorBoundary><ProfileScreen/></ErrorBoundary>}/>
                <Route path='/shop' element={<ErrorBoundary><ShopScreen /></ErrorBoundary>}/>
              </Routes>
              </ErrorBoundary>
            </>
    )
}

export default ExerciseOne