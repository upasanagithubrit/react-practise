import React from "react";
import frameimg from "../asserts/frame.png";
import Signupform from "../Components/Signupform";
import Loginform from "../Components/Loginform";
import { FcGoogle } from "react-icons/fc";

// common for both signup and login page

const Template = ({ title, desc1, desc2, image, setisLoggedin, formtype }) => {
  return (
    <div className="flex justify-between gap-x-20 w-11/12 max-w-[1160px] py-12 mx-auto gap-y-12  ">
      <div className="w-11/12  max-w-[450px]">

      {/* .............title............... */}
        <h1 className="text-white text-[1.875rem] leading-[2.375rem] font-semibold">
          {title}
        </h1>

        {/* ...............description.............. */}
        <p className="text-[1.5rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-blue-100 italic ">{desc2}</span>
        </p>

        {/* decide page is signup or login  */}
        {formtype === "signup" ? (
          <Signupform setisLoggedin={setisLoggedin} />
        ) : (
          <Loginform setisLoggedin={setisLoggedin} />
        )}

        <div className=" w-full my-4 gap-x-2 flex items-center">


          {/* ..............................or......................section........... */}
          <div className="h-[1px] bg-white w-full"></div>
          <p className="text-richblack-700 font-medium leading ">
            OR
          </p>
          <div className="h-[1px] bg-white w-full"></div>
        </div>

        {/* ..............sign-up button.................. */}
        <button className="flex w-full items-center justify-center rounded-[8px] font-medium text-richblack-100 border border-white py-[8px] px-[12px] gap-x-2 mt-6">
          <FcGoogle />
          <p className="text-white ">Sign up with google</p>
        </button>
      </div>

      {/* side image -section */}

      <div className="relative max-w-[450px] w-11/12 ">
        <img
        className="relative"
          src={frameimg}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />

        {/* ....................main image section................... */}
        <img
        className="absolute -top-4 right-4"
          src={image}
          alt="students"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
