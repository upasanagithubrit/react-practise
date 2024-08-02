import React from 'react'
import { AiOutlineEyeInvisible,AiOutlineEye } from 'react-icons/ai'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";

const Loginform =({setisLoggedin})=>
 {

    //    after login go to dashboard use navigate
    const navigate=useNavigate();

    const [formData,setformData]=useState({
        email:"",
        password:"",
    })

//  setting form data

    const [showPassword,setshowPasswod]= useState(false)

    function handlechange(event)
    {
        setformData((prevData)=>
       ( {
            ...prevData,
            [event.target.name]:event.target.value

        }))


    }

    //    form submit handler
    function submithandler(event)
    {
      event.preventDefault();
      setisLoggedin(true);
      toast.success("Logged in")
      navigate('/dashboard')
  
    }
   return(
      <form onSubmit={submithandler}
      className='flex flex-col w-full gap-y-4 gap-x-6 mt-8'>

        {/* email field */}
        <label className='w-full '>
            <p className='text-white text-[0.87rem] mb-1 leading-[1.375rem]'> Email Address<sup
            className='text-pink-200'>*</sup>

            </p>
            <input
            className='shadow-[0px_1px_2px_1px_#f7fafc]
            bg-richblack-800 rounded-[0.5rme] text-richblack-5 w-full p-[12px]'
            required
            type='text'
            value={formData.emil}
            onChange={handlechange}
            name="email"
            placeholder='enter your email'/>
        </label>


{/* password field */}
        <label className='w-full  relative'>
            <p
            className='text-white text-[0.87rem] mb-1 leading-[1.375rem]'> Password
            <sup
            className='text-pink-200'
            >*</sup>

            </p>
            <input
             className='shadow-[0px_1px_2px_1px_#f7fafc]
             bg-richblack-800 rounded-[0.5rme] text-richblack-5 w-full p-[12px]'
            required
            name='password'
            type={showPassword?('text'):('password')}
            value={formData.password}
            onChange={handlechange}
            placeholder='enter your password'/>


            {/* aakh vala icon password field pe  */}
            <span
            className='text-white absolute right-3 top-[38px] cursor-pointer' 
            onClick={()=>setshowPasswod((prev)=>!prev)}>
                {showPassword?
                (<AiOutlineEyeInvisible
                fontSize={24}
                />)
                :(<AiOutlineEye
                    fontSize={24}/>)}
            </span>

{/* ...................forget password field..................... */}
            <Link to="#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                Forget password
                </p></Link>
        </label>
{/* ......................button.................... */}
        <button
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-700 px-12 py-[8px]'
        >Sign In</button>
      </form>
      )
 }

 export default Loginform;