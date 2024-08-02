import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import {toast } from 'react-hot-toast';
import { remove } from '../redux/slices/cartSlice';


function Welcome() {
    const { cart } = useSelector((state) => state);
    const dispatch=useDispatch();
    

    // ----------------remove item one by one ---------------------
function handleclick(){
    cart.forEach((item) => {
        dispatch(remove(item.id));
    });
    toast.success("Welcome Back")
}

  return (
    <div>
 <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-gray-700 font-semibold text-xl mb-2">
          Thank you and keep visiting!
        </h1>
        <NavLink to="/">

        {/* ------------------------------button-section--------------------------- */}
          <button 
          onClick={handleclick}
          className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">
            Shop Again
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Welcome;