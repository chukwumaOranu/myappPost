import React from 'react'
import { useSelector } from "react-redux";
import { usersAllPosts } from "./postsSlice";

const PostList = () => {

    const postz = useSelector(usersAllPosts);
  


      
  return (
    <div className='flex justify-center bg-[blue] items-center'>
       <div className='flex flex-col p-8 border-4 bg-[white] w-[600px]'>
          <h1 className='w-full text-2xl md:text-3xl font-bold text-[#000000] py-8'>All Posts Added</h1>
             
             { postz.map(post => (
              <>
              <div class="flex flex-col ">
                    <div className="flex-col w-full p-2">
                     <div className="py-2"><h3>Title: {post.title}</h3></div>
                     <div className=""><h3>Content</h3><p>{post.content}</p></div>
                   </div>
              </div>
                  <div >
                    <div className="p-2"><img src="https://verpex.com/assets/uploads/images/blog/How-to-Hide-a-Featured-Image-in-a-WordPress-Post.webp?v=1681195715" alt="My redux image" /></div>
                    <div><h3 className="underline underline-offset-1">Author Name: {post.userId}</h3></div>
                  </div>
                  </>
               ))}      
       </div>
    </div>
  )
}

export default PostList
