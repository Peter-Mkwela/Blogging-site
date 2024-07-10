import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
const {data: blogs, error, timer} = useFetch('http://localhost:8000/blogs')


    return ( 
        <div className="Home">
          {error && <div> {error} </div>}
          {timer && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;