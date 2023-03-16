import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FriendsWithState } from "./types";
import { DMFriendChat } from "./types";

const initialState: FriendsWithState = {
    friendsWith: [],
    loading: true
}

const friendsWithSlice = createSlice({
    name: 'friendsWith',
    initialState,
    reducers: {
        updateFriendsList: (state, action: PayloadAction<DMFriendChat[]>) => {
            state.friendsWith = state.friendsWith.concat(action.payload)
            // sort in descending order
            state.friendsWith.sort((a, b) => {
                return new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime()
            })
            state.loading = false
        },
        updateLastMessage: (state, action) => {
            for (let i = 0; i < state.friendsWith.length; ++i) {
                if (state.friendsWith[i].combinedId === action.payload.combinedId) {
                    state.friendsWith[i].lastMessage = action.payload.lastMessage
                    state.friendsWith[i].lastMessageTime = action.payload.lastMessageTime
                    break;
                }
            }
            // sort in descending order
            state.friendsWith.sort((a, b) => {
                return new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime()
            })
        },
        clearFriendsList: (state, action) => {
            console.log("Camere here")
            state.friendsWith = []
        }
    }
})
export const {updateFriendsList, updateLastMessage, clearFriendsList} = friendsWithSlice.actions
export default friendsWithSlice.reducer