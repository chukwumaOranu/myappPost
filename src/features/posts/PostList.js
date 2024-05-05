import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostList = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);

    
  return (
    <div>
      
    </div>
  )
}

export default PostList
