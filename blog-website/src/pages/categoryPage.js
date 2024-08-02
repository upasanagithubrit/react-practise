import React from 'react' ;
import Header from '../components/header'
import Pagination from '../components/pagination'
import Blogs from '../components/blogs'
import {useNavigate,useLocation} from 'react-router-dom'

function Categorypage() {
  const navigation=useNavigate();
  const location=useLocation();
  const category=location.pathname.split("/").at(-1);

  
  return (
    <div 
    className="flex flex-col  justify-center items-center">
      <Header/>
      <div>
      <button
       className="border-2 mt-16 border-gray-300 py-1 px-4 rounded-md mb-6 "
        onClick={()=>navigation(-1)}>
          {/* ........navigation(-1)---to go back */}
          back
        </button>
        <h2 className='font-bold text-xl underline'>
          Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default Categorypage;