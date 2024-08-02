import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signupform = ({ setisLoggedin }) => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
   
  const [accountType,setaccountType]=useState('student');
  const [showPassword, setshowPasswod] = useState(false);
  const [showconfirmPassword, setshowconfirmPasswod] = useState(false);
  function changehandler(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submithandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      toast.warning("password not matched");
      return;
    } else {
      setisLoggedin(true);
      toast.success("Logged in");
      navigate("/dashboard");
    }
  }
  return (
    <div className="mt-8">

      {/* student-instructor button */}
     
      <div className="flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
        <button
          className={`${accountType === "student"
            ?
            "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setaccountType("student")}>
          Student
        </button>

        <button
          className={`${accountType === "instructor"
            ?
            "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setaccountType("instructor")}>
          Instructor
        </button>
      </div>
      <form onSubmit={submithandler}>
        {/* name section */}
        <div className="flex gap-x-10 ">

   {/* firstname */}
           
          <label>
            <p className="text-white text-[0.87rem] mb-1 leading-[1.375rem]">
              First Name
            </p>
            <input
              className="shadow-[0px_1px_2px_1px_#f7fafc]
            bg-richblack-800 rounded-[0.5rme] text-richblack-5 w-full p-[8px]"
              type="text"
              placeholder="enter First Name"
              name="firstname"
              onChange={changehandler}
              value={formData.firstname}
            />
          </label>
           
           {/* last name */}
          <label>
            <p className="text-white text-[0.87rem] mb-1 leading-[1.375rem]">
              Last Name
            </p>
            <input
              className="shadow-[0px_1px_2px_1px_#f7fafc]
            bg-richblack-800 rounded-[0.5rme] text-richblack-5 w-full p-[8px]"
              type="text"
              placeholder="enter last Name"
              name="lastname"
              onChange={changehandler}
              value={formData.lastname}
            />
          </label>
        </div>



          {/* email address */}

        <label>
          <p className="text-white mt-4 text-[0.87rem] mb-1 leading-[1.375rem]">
            Email
          </p>
          <input
            className="shadow-[0px_1px_2px_1px_#f7fafc]
            bg-richblack-800 rounded-[0.5rme] text-richblack-5 w-full p-[8px]"
            type="text"
            placeholder="enter Email"
            name="email"
            onChange={changehandler}
            value={formData.email}
          />
        </label>

        {/* password section */}
        <div className='flex gap-x-10 mt-4'>
          <label className=' relative'>
            <p className="text-white text-[0.87rem] mb-1 leading-[1.375rem]">
              {" "}
              Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="shadow-[0px_1px_2px_1px_#f7fafc]
            bg-richblack-800 rounded-[0.5rme] text-richblack-5 w-full p-[8px]"
              required
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changehandler}
              placeholder="enter your password"
            />

            <span
              className="text-white absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setshowPasswod((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
          </label>


{/* confirm password */}
          <label className=' relative'>
            <p className="text-white text-[0.87rem] mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="shadow-[0px_1px_2px_1px_#f7fafc]
            bg-richblack-800 rounded-[0.5rme] text-richblack-5 w-full p-[8px]"
              required
              name="confirmpassword"
              type={showconfirmPassword ? "text" : "password"}
              value={formData.confirmpassword}
              onChange={changehandler}
              placeholder="confirm password"
            />

            <span
              className="text-white absolute right-3 top-[35px] cursor-pointer"
              onClick={() => setshowconfirmPasswod((prev) => !prev)}
            >
              {showconfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
          </label>
        </div>

        {/* button */}
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-700 px-12 py-[8px] mt-5 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signupform;
