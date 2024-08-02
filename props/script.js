 import "./script.css"
 import { useState } from 'react';
 const card=()=>
    {
        
        const [point, setPoint]=useState(0);

       const handleincre=()=>
        {
          const data=[
            {
              point:point
            }
          ]
          console.log("previous value", data);
            setPoint(point+1);
        }
       
        const handledecre=()=>
          {
            if(point==0) console.log("zero occur");
            else
              setPoint(point-1);
          }
         
         const reset =()=>
          {
            setPoint(0);
          }
        return(
      <div className="innerdiv">
        <div className="point-section">
            {point}
        </div>
        <div className="btn-section">
            <button onClick={handleincre}> increment</button>
            <button onClick={handledecre}> decrement</button>
            <button onClick={reset}>reset</button>
        </div>

      </div>
            
        )
    }

    export default card;