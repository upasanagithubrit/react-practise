import React,{useContext} from 'react' 
import { Appcontext } from '../context/appcontext';


function Pagination() {
  const {Page,handlepageChange,totalPage} =useContext(Appcontext)
  return (
    <div 
    className='fixed bottom-0 bg-white py-2 border-t-2 border-t-gray-300 w-full  flex flex-row justify-evenly '>
      <div 
      className='flex items-center gap-x-4 '>
        {/* ...........................previous-page-button..................... */}
        {Page>1 &&
          <button
          className='border-2 py-1 px-1 rounded-md font-semibold border-gray-500'
           onClick={()=>handlepageChange(Page-1)}>
            Previous</button>

        }

        {/* ............................next-page-button ........................ */}
        {Page<totalPage && 
          <button
          className='border-2 py-1 px-1 rounded-md font-semibold border-gray-500'
          onClick={()=>handlepageChange(Page+1)}>
            Next

          </button>
          
        }
      </div>
     <div>

      {/* .................................page-count-section.................................. */}
     <p
      className='text-sm font-semibold ml-auto'>
        Page {Page} of {totalPage}
      </p>
 

     </div>
     
    </div>
  );
}

export default Pagination;