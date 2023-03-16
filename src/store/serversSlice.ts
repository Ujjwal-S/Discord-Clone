import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServerChat } from "./types";

const initialState: {servers:ServerChat[]} = {
    servers: [],
}

const serversSlice = createSlice({
    name: 'serversJoined',
    initialState,
    reducers: {
        updateServersList: (state, action: PayloadAction<ServerChat[]>) => {
            state.servers = action.payload
        },
        clearServersList: (state, action) => {
            state.servers = []
        }
    }
})

export const {updateServersList, clearServersList} = serversSlice.actions;
export default serversSlice.reducer