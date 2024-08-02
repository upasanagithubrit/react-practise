import React from 'react' ;
import Header from '../components/header'
import Blogs from '../components/blogs'
import Pagination from '../components/pagination'

function HomePage() {
  return (
    <div >
      <Header/>
      <Blogs/>
      <Pagination/>
 
    </div>
  );
}

export default HomePage;