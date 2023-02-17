import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import appSlice from './appSlice'

export const store = configureStore({
	reducer: {
		userAuth: authSlice,
		appState: appSlice
	},
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
