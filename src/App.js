import './App.css';
import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";
import AddUser from './features/users/AddUser';

function App() {
  return (
     <div>
      <AddUser />
      <AddPostForm />
      <PostList />

     </div>
   
  );
}

export default App;
