import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import Card from './card'
import {useState} from'react';

function Testimonials(props){
    let Reviews=props.Reviews;      ////data passing 
    const [index,setIndex]=useState(0);     //for scroll of data left right 
    function leftshifthandler(){
              if(index-1<0)
              {
                setIndex(Reviews.length-1);
              }
              else{
                setIndex(index-1);
              }
    }

    function rightshifthandler(){
        if(index+1> Reviews.length-1)
        {
            setIndex(0);
        }
        else{
            setIndex(index+1)
        }
        
    }

    function surprisehandler(){
        let a=Math.floor(Math.random() * Reviews.length)
        setIndex(a);
    }
    return(

        <div className='w-[85vw] md:w-[700px] 
        bg-white flex flex-col ml-14 justify-center items-center mt-10 p-10 transition-all duration-700'>
            <Card Reviews={Reviews[index]}/>
            <div className='flex text-3xl mt-5 gap-3 text-violet-500 font-bold mx-auto'>
                <button 
                onClick={leftshifthandler}
                className='cursor-pointer Hover:text-violet-500 ' ><FiChevronLeft/></button>
                <button
              onClick={rightshifthandler}
                className='cursor-pointer Hover:text-violet-500 '><FiChevronRight/></button>
            </div>
            <div>
                <button
                onClick={surprisehandler}
                 className=' mt-2 bg-violet-500 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials;