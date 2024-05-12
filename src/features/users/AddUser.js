import { useState} from 'react'
import { useDispatch} from "react-redux";
import { usersAdded } from "./usersSlice"

const AddUser = () => {

const onUsernameChanged = e => setUsername(e.target.value)

const [username, setUsername] = useState('')
const dispatch = useDispatch()


 const onSaveUserClicked = () => {

    if (username){
      dispatch(
         usersAdded(username)
      )
      setUsername('')
    }      
 }

  return (

    
    <div className='flex justify-center bg-[blue] items-center py-8'>
    <div className='flex flex-col p-8 border-4 bg-[white] w-[600px]'>
         <h2 className='w-full text-2xl md:text-3xl font-bold text-[#000000] py-8'>Add Author Name</h2>
         <form className='flex flex-col w-full '>
             <label className='font-bold text-[#000000] py-6' htmlFor="userTitle">Username:</label>
             <input className='focus:outline-none ring-1 px-2 ring-[#000000] focus:ring-[#000000]'
                 type="text"
                 id="username"
                 name="usernameTitle"
                 value={username}
                 onChange={onUsernameChanged}
             />
             <button className='bg-[#000000] text-[#ffffff] py-2 my-4'
                 type="button"
                 onClick={onSaveUserClicked}
             >Save to Continue</button>
         </form>
        
     </div>
     </div>
 
  )
}

export default AddUser
