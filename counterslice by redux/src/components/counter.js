import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from '../redux/slices/counterslice'


function Counter() {

    const count =useSelector((state)=>state.Counter.value)
    // ..............to use reducers e use dispatcher..............
    const dispatch=useDispatch()
  return (
    <div 
    >
    <button
    className='border w-[30px] h-[30px] border-solid border-black border-3 rounded-md shadow-3'
    onClick={()=>dispatch(increment())}>+++</button>
   
    <div>{count}</div>
  
    <button
    className='border w-[30px] h-[30px] border-solid border-black border-3 rounded-md shadow-3'
     onClick={()=>dispatch(decrement())}>---</button>
    </div>
  );
}

export default Counter;
