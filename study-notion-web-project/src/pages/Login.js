import React from 'react'
import Template from '../Components/template'
import logInimg from '../asserts/login.png'

const Login =({setisLoggedin})=>
 {
   return(
     <Template
     title="Welcome back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={logInimg}
      setisLoggedin={setisLoggedin}
      formtype="login"

     />
      )
 }

 export default Login;