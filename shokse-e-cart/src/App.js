import React from 'react'
import Navbar from './components/navbar.js'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home.js'
import Cart from './pages/cart.js'
import Welcome from './pages/welcome.js'

function App() {
  return (
    <div>
  
    <div
    className='bg-slate-900'>
      {/* .........................navbar...................... */}
    <Navbar/>
    </div>
    {/* ............................routes..................... */}
<Routes>
  {/* ..........doo page hai eisliye dooroute ........... */}
  <Route path="/" element={<Home/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/welcome" element={<Welcome/>}/>
</Routes>
     
    </div>
  );
}

export default App;
