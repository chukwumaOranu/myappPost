import { useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { usernameAll } from "../users/usersSlice"
import { addNewPost } from "../posts/postsSlice"


    
const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const usernaming = useSelector(usernameAll)
  
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

     const onSavePostClicked = () => {
           if (title && content && userId){
               dispatch(
                addNewPost(title, content, userId)
               )
               setTitle('')
               setContent('')
               setUserId('') 
           }
     }


     

  return (
    
    <div className='w-screen h-screen bg-[blue] flex justify-center items-center'>
        <div className='flex flex-col p-6 border-4 bg-[white] w-[600px] '>
        <h1 className='w-full text-2xl md:text-3xl font-bold text-[#000000] py-8'>Add a New Post</h1>
            <form className='flex flex-col w-full '>
                <label className='font-bold text-[#000000] py-6' htmlFor="postTitle">Post Title:</label>
                <input className='focus:outline-none ring-1 px-2 ring-[#000000] focus:ring-[#000000]'
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label className='font-bold text-[#000000] py-6' htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged} className='focus:outline-none ring-1 px-2 ring-[#000000] focus:ring-[#000000]'>
                <option value="">Select</option>
                    {usernaming.map(u => (
                         <option key={u.id} value={u.username}>
                            {u.username}
                        </option>))}
                       
                </select>
                <label className='font-bold text-[#000000] py-6' htmlFor="postContent">Content:</label>
                <textarea  className='h-[200px] focus:outline-none ring-1 px-2 ring-[#000000] focus:ring-[#000000]'
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button className='bg-[#000000] text-[#ffffff] py-2 my-4'
                    type="button"
                    onClick={onSavePostClicked}
                
                >Save Post</button>
                
            </form>
        </div>
        
    </div>
  )
}

export default AddPostForm
