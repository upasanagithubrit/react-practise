import React, { useState, useEffect } from "react";
import Spinner from "../components/spinner";
import Product from "../components/product.js";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [Loading, setLoading] = useState(false);
  const [posts, setposts] = useState([]);


//   ----------------fetch-data-function-----------
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setposts(data);
    } catch (error) {
      console.log("error aaye hai home page ke fet function me ");
      setposts([]);
    }
    setLoading(false);
  }


//   -----------to-run-fetch-function-----------------
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {Loading ? (
        // ----------------spinner------------------
        <Spinner />
      ) :
    //   ------------------post-section---------------------
      posts.length > 0 ? (
        <div
        className="grid md:grid-cols-3 sm:grid-cols-2 sx:grid-cols-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5
        min-h-[80px]"
        >
        {
              posts.map((post) => (
                <Product key={post .id} post={post}/>) )
        }
        </div>
      ) : (
        <div
        className="flex justify-center items-center"
        >
          <p>No Posts Found</p>
        </div>
      )}
    </div>
  );
}

export default Home;
