

import {createContext,useState} from 'react';
import {baseUrl}  from '../baseUrl'
import {useNavigate} from 'react-router-dom'

// ...................create context.............
export const Appcontext=createContext();

 function AppContextProvider({children})
{
     const [Loading,setLoading]=useState(false);
     const [Posts,setPosts]=useState([]);
     const [Page,setPage]=useState(1)
     const [totalPage,settotalPage]=useState(null)
     const navigate=useNavigate()



    //  .................fillng data...............


     async function fetchBlogPosts( Page=1,tag=null, category)
     {
        setLoading(true)
        let url=`${baseUrl}?page=${Page}`

        // ................for-hashtag------------------
        if (tag) {
            url += `&tag=${tag}`;
          }

        //   --------------------------for-category---------------------
          if (category) {
            url += `&category=${category}`;
          }
        console.log(url)

        try{
            const result=await fetch(url);
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts)
            settotalPage(data.totalPages);

        }
        catch(error)
        {
            console.log("error occur in fetching data")
            setPage(1);
            setPosts([])
            settotalPage(null);


        }

        setLoading(false)

     }





    //  ..............page change handler............

function handlepageChange(Page)
{
    // --------------------------jab bhi url change hota hai to it incudes page no ---------------------------
    navigate({search : `?page=${Page}`});
    setPage(Page);
}
// ...................combine data for conetxt AppContextProvider.apply...........


   const value={
    Posts,
    setPosts,
    Loading,
    setLoading,
    Page,
    setPage,
    totalPage,
    settotalPage,
    handlepageChange,
    fetchBlogPosts


   };


//    .......................apply component to app..................
   return <Appcontext.Provider value={value}>
    {children}
   </Appcontext.Provider>


}
export default AppContextProvider;