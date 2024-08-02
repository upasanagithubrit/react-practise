import React from 'react' ;
import {NavLink} from 'react-router-dom'


function BlogDetails({post}) {
 
  return (
   
   <div
          key={post.id}
          className="border border-solid-black m-4 bg-orange-200"> 
          {/* ............................blog ka title............................... */}
          <NavLink to={`/blog/${post.id}`}>
          <span className="font-bold text-lg text-center hover:underline cursor-pointer">{post.title}</span>
          </NavLink>
            
            <p className="text-center">
              {/* .......................blog ka uthor aur category................... */}
              By <span className="italic">{post.author}</span> on 
              <NavLink to={`/categories/${post.category.replace(" ","-")}`}>
              <span className="italic underline font-bold hover:cursor-pointer">{post.category}</span>
              </NavLink>
             
            </p>

            {/* ................blog-ki-date........................................... */}
            <p className="font-bold">Posted on: {post.date}</p>
            <p className="text-center"> {post.content}</p>

            <div

            // .............................blog-ke -hashtag......................
            className="text-center">
              {post.tags.map((tag,index) => {
                return <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                <span className="text-blue-700 font-semibold text-xs m-1 underline hover:text-red-600 cursor-pointer"> #{tag}</span>
            </NavLink>
              })}
            </div>
          </div>
   
  );
}

export default BlogDetails;