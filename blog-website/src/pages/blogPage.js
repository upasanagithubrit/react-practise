import React ,{useState,useContext,useEffect} from 'react' ;
import Header from '../components/header'
import {useNavigate,useLocation} from 'react-router-dom'
import {Appcontext} from '../context/appcontext'

import Spinner from '../components/spinner'
import BlogDetails from '../components/blogdetails';

function BlogPage() {
  
  const newbaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
  const {setLoading,Loading} =useContext(Appcontext)
  const [blog,setblog]=useState(null)
  const [relatedBlogs,setrelatedBlogs]=useState([])
  const location=useLocation();
  const navigate= useNavigate();

// --------------------blog -ki-id------------------
  const blogId= location.pathname.split("/").at(-1)


  // ...............................jab ham kise blog ki heading se related blogs find karenge ye function tb call haoga ........................
async function fetchRelatedblogs(){
  setLoading(true);
  let url=`${newbaseUrl}?blogId=${blogId}`;

  // -------------------------blog ki id se related fetching data-----------------------
  try{
    const res=await fetch(url);
    const data=await res.json();
    setblog(data.blog);
    setrelatedBlogs(data.relatedBlogs)


  }
  catch(error)
  {
    console.log("blogpage me error hai ")
    setblog(null)
    setrelatedBlogs([]);

  }
  setLoading(true);
}


// ------------------------------if blogid available run this --------------------------
useEffect(()=>
{

  // ...............agar blog id available ho tabi call hga .........
  if(blogId)
    fetchRelatedblogs();

},[location.pathname])




  
  return (
    <div 
    className="flex flex-col  justify-center items-center">
      <Header/>
        <div>
        <button
        className="border-2 mt-16 border-gray-300 py-1 px-4 rounded-md mb-6 "
        onClick={()=>navigate(-1)}>
          {/* ........navigation(-1)---to go back */}
          back
        </button>
        </div>
        <div
         className="flex justify-center items-center mb-6 mt-7">
          {Loading ? (
            <Spinner />
          ) : blog ? (
            <div 
            className="w-11/12 max-w-[800px] m-7">
              <BlogDetails post={blog} />
              <h2 className="text-2xl font-bold my-10">Releated Blogs</h2>
              <div className="w-11/12 max-w-[800px] m-7">
                {relatedBlogs.map((post) => (
                  <div key={post.id} >
                    <BlogDetails post={post} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No Blog Found</p>
          )}
        </div>
      </div>
   
  );
}

export default BlogPage;