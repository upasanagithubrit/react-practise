import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'
import PrivateRoute from './Components/PrivateRoute'



function App() {
  const [isLoggedin,setisLoggedin] =useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setisLoggedin={setisLoggedin}/>}/>
        <Route path='/signup' element={<Signup setisLoggedin={setisLoggedin}/>}/>
        <Route path='/dashboard' element={
          
        
          <PrivateRoute isLoggedin={isLoggedin}>
              <Dashboard/>
          </PrivateRoute>
        }/>

      </Routes>
    </div>
  );
}

export default App;
