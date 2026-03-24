import React, { useEffect } from 'react'
import { useState } from 'react';

const FetchData = () => {
    const [post,setPost]=useState([]);
    useEffect(() => {
      const fetchData=async()=>{
        try {
            const response=await fetch('https://jsonplaceholder.typicode.com/posts');
            const jsonData=await response.json();
            console.log(jsonData);
            setPost(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
      }
      fetchData();
    }, [])
    
  return (
    <>
     <h1>Posts</h1>
     <ul>
        {post.slice(0, 5).map((post) => (
            <>
            <li key={post.id}>{post.title}</li>
            <li>{post.body}</li>
            </>
        ))}
     </ul>
    </>
  )
}

export default FetchData