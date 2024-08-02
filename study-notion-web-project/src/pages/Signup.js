import React from 'react'
import Template from '../Components/template'
import signUpimg from '../asserts/signup.png'

const Signup =({setisLoggedin})=>
 {
   return(
    <Template
    title="Join the millions learning to code with StudyNotion for free"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
     image={signUpimg}
     setisLoggedin={setisLoggedin}
     formtype="signup"

    />
      )
 }

 export default Signup;