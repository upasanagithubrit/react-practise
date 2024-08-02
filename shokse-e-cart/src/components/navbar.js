import React from 'react'
import logo from './logo.png'
import {FaShoppingCart} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import { useSelector } from "react-redux";

function Navbar() 
{
  const { cart } = useSelector((state) => state);


  return (
    <div>
    <nav
    className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto'>

       <NavLink to="/"
       className="ml-5">
       {/* -------------------------------navbar-logo------------------------ */}
       <img 
        className='w-[280px] h-[90px]'
        src={logo}/>
       </NavLink>
        <div
        className='flex items-center font-md text-slate-100 mr-5 space-x-6'
        >
            <NavLink to="/">
            {/* -------------------------home-option-------------------- */}
            <p>Home</p>
            </NavLink>
           
           {/* -------------------------cart-option----------------------- */}
            <NavLink to="/cart">
            
           <div
           
           className='relative '>
           <FaShoppingCart
           className='text-2xl '
           />
            {
              cart.length>0&&
              <span
              className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center 
              animate-bounce rounded-full text-white'
              >{cart.length}</span>
            }
           </div>
            

            </NavLink>
            
        </div>

    </nav>
     
    </div>
  );
}

export default Navbar
;