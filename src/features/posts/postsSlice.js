import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPost: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }

})

export const usersAllPosts = (state) => state.posts.posts;

export const { addNewPost } = postsSlice.actions

export default postsSlice.reducer