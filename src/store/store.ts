import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import appSlice from './appSlice'
import friendsWithSlice from './friendsWithSlice'
import serversSlice from './serversSlice'

export const store = configureStore({
	reducer: {
		userAuth: authSlice,
		appState: appSlice,
		friendsWith: friendsWithSlice,
		serversJoined: serversSlice
	},
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
