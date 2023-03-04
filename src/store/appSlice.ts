import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./types";

const initialState: AppState = {
    activeScreen: "directMessages",
    activeChat: null,
    activeChannel: null,
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        updateAppState(state, action: PayloadAction<AppState>) {
            state.activeScreen = action.payload.activeScreen
            state.activeChat = action.payload.activeChat
        }
    }   
})

export const {updateAppState} = appSlice.actions
export default appSlice.reducer