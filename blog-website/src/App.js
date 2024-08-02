import React,{useContext,useEffect} from "react" ;

import { Appcontext } from "./context/appcontext";
import { Routes ,Route,useSearchParams, useLocation} from "react-router-dom";
import Home from './pages/homePage'
import BlogPage from './pages/blogPage'
import CategoryPage from './pages/categoryPage'
import TagPage from './pages/tagPage'



function App() {

  const {fetchBlogPosts}=useContext(Appcontext)
  const [searchParams,setsearchParams]=useSearchParams();
  const location= useLocation();


// .................................fetch data .....................
  useEffect(()=>
  {
    const page=searchParams.get("page") ?? 1;
    
    if(location.pathname.includes("tags"))
    {
      /////////iska mtlb tag vala page show karna hai

      const tag=location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),tag)

    }

    // .....................cateories vala page ke liye ....................
else if(location.pathname.includes("categories")){
  const category=location.pathname.split("/").at(-1).replace("-"," ");
  fetchBlogPosts(Number(page),null,category)

}
// .....................simplepage........................
else {
  fetchBlogPosts(Number(page))
}
// location.pathname--jab category ya tag change hover
  // location.search--jab page change ho 
    
  },[location.pathname,location.search]);

  

  
  return (
   
       <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog/:blogId" element={<BlogPage/>}/>
    <Route path="/tags/:tag" element={<TagPage/>}/>
    <Route path="/categories/:category" element={<CategoryPage/>}/>
   </Routes>
    
  );
}

export default App;
