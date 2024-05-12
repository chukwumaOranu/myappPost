import React from 'react'
import { useSelector } from "react-redux";
import { usersAllPosts } from "./postsSlice";

const PostList = () => {

    const postz = useSelector(usersAllPosts);
  


      
  return (
    <div className='flex justify-center bg-[blue] items-center'>
       <div className='flex flex-col p-8 border-4 bg-[white] w-[600px]'>
       <h1 className='w-full text-2xl md:text-3xl font-bold text-[#000000] py-8'>All Posts Added</h1>
       {Object.values(postz).map(post => (
          <div className="grid grid-cols-1 divide-y">
            
              <div key={post.id}>
                <h4 key={post.id}>Title:{post.title}</h4>
                <h4 key={post.id}>Content:</h4>
                <p key={post.id}>{post.content}</p>
                <h4 key={post.id}>Author:{post.userId} </h4>
                </div>
               
          </div>
         ))}
       </div>
    </div>
  )
}

export default PostList
