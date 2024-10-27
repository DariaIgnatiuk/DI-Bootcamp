import Dashboard from './components/Dashboard';
import LoginRegister from './components/LoginsRegister';
import Header from './components/Header';
import Admin from './components/Admin';
import Auth from './components/auth/Auth';
import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>

    <Routes>
      <Route path='' element={<Dashboard/>}/>
      <Route path='/admin' element={<Auth><Admin/></Auth>}/>
      <Route path='/login' element={<LoginRegister mode='login'/>}/>
      <Route path='/register' element={<LoginRegister mode='register'/>}/>
    </Routes>

    </>
  )
}

export default App
