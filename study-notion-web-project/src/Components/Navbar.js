import React from "react";
import { Link } from "react-router-dom";
import logo from "../asserts/Logo.svg";
import { toast } from "react-toastify";




// navbar
const Navbar = (props) => {

  let isLoggedin = props.isLoggedin;
  let setisLoggedin = props.setisLoggedin;


  return (
    <div className="flex justify-between items-center w-11/12 max-width-[1160px] py-4 max-auto ml-10">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>
      


      {/* nav bar items */}
      <nav>
        <ul className="text-white flex gap-x-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>


     {/* buttons-section */}

      <div className="flex items-center gap-x-4 ">
        {!isLoggedin &&
          <Link to="/login">
            <button className=" bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        }
        {!isLoggedin &&
          <Link to="/signup">
            <button 
          
          className=" bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign up
            </button>
          </Link>
        }

        {isLoggedin &&
          <Link to="/">
            <button 
            className=" bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
            onClick={()=>{
                setisLoggedin(false);
                toast.success("Logged out successfull")
            }}>
              Log out
            </button>
          </Link>
        }
        {isLoggedin &&
          <Link to="/dashboard">
            <button 
            className=" bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
