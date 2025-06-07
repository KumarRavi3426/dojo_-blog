import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // const handleDelete = (id) =>{
    //     const newBlogs= blogs.filter(blog => blog.id !==id);
    //     setBlogs(newBlogs);
    //     }

    // const [name, setName] = useState('mario');

    // const handleClickAgain = (name, e)=> { // default parameter
    //     console.log('hello' + name, e);
    // }

    // useEffect(() => {
    //     console.log('hi');
    //     console.log(name);
    // },[name])




    return (
      <div className="home">
        <div>
          {/* conditional rendering */}
          {error && <div>{error}</div>}
          {isPending && <div>...Loading</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
          {/* <button onClick={() => setName('luigi')}>Change name</button> */}
          {/* <p> {name} </p> */}
          {/* <BlogList blogs={blogs.filter((blogs) => blogs.author == 'mario')} title="All Blogs!" /> */}
        </div>

        {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me Again!</button> */}
      </div>
    );
};

export default Home;
