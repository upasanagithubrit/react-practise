import React from "react";
import { useContext } from "react";
import { Appcontext } from "../context/appcontext.js";
import Spinner from "../components/spinner.js";
import BlogDetails from "./blogdetails.js";
// import Card from "../components/card.js";

function Blogs() {
  // .................export using useContext.................
  const { Loading, Posts } = useContext(Appcontext);

console.log(Posts)


  return (
    <div
    className="flex justify-center items-center mb-6 mt-7">
    <div
    className="w-11/12 max-w-[800px] m-7 ">
      {Loading ? (
        
           <Spinner />
        
       
      ) : Posts.length === 0 ? (
        <div>
          <p>No post found</p>
        </div>
      ) : (

        // .............................post ka array hai eisliye map use kiya hai ..............................
        Posts.map((post) => (
        <BlogDetails post={post}/>
        ))
      )}
    </div>
    </div>
  );
}

export default Blogs;
