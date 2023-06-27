import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) => {
    //     // const newBlogs = blogs.filter(blog => blog.id !== id)
    //     const newBlog = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlog)

    // }



    return (
        <div className="content">
            <h1>HomePage</h1>
            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div >}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />
            
            }

        </div>
    );
}

export default Home;