import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    username: []
}

const usersSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        usersAdded: {
            reducer(state, action) {
                state.username.push(action.payload)
            },
            prepare(username) {
                return {
                    payload: {
                        id:nanoid(),
                        username
                    }
                }
            }
        }
    }

})

export const usernameAll = (state) => state.username.username;

export const { usersAdded } = usersSlice.actions

export default usersSlice.reducer