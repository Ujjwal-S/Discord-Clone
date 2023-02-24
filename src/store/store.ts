import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import appSlice from './appSlice'
import friendsWithSlice from './friendsWithSlice'

export const store = configureStore({
	reducer: {
		userAuth: authSlice,
		appState: appSlice,
		friendsWith: friendsWithSlice
	},
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
