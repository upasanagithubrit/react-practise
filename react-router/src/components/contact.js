
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Contact =()=>
{
    const navigate=useNavigate();
    function handleclick()
    {
        navigate("/")
    }
    return(
        <div>
            <h2>contact page</h2>
            <button onClick={handleclick}>move to home page</button>

        </div>
    )
}
export default Contact;