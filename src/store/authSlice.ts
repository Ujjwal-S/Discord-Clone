import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { 
    createUserWithEmail, signInWithGoogle,
    signInWithEmail
} from "../firebase/auth";
import { auth } from "../firebase/firebase";
import { updateProfile, User } from "firebase/auth";
import { uploadImage } from "../firebase/storage";
import sendToast from "../utils/sendToast";
import { UserInfo, AuthState, Credentials, UserState } from "./types";


export const loginWithEmail = createAsyncThunk ( 'auth/loginWithEmail',
    async (userInfo:Credentials) => {
        const {email, password} = userInfo
        try {
            const data = await signInWithEmail(email, password);
            return {
                uid: data.user.uid,
                email: data.user.email as string,
                photoURL: data.user.photoURL as string,
            }
        }
        catch(err) {
            throw new Error(err as string)
        }
    }
)

export const googleSignIn = createAsyncThunk( 'auth/registerWithGoogle',
    async () => {
        try {
            const data = await signInWithGoogle();
            return {
                uid: data.user.uid,
                email: data.user.email as string,
                photoURL: data.user.photoURL as string,
            }
        }
        catch(err) {
            throw new Error(err as string)
        }
    }
)

export const registerWithEmail = createAsyncThunk( 'auth/registerWithEmail',
    async (userInfo: UserInfo) => {
        const {email, password, imageFile} = userInfo;
        try {
            let photoURL = await uploadImage(imageFile);  // upload Image
            const data = await createUserWithEmail(email, password);  // create user
            // set profile image
            try {
                auth.currentUser && await updateProfile(auth.currentUser, {
                    photoURL
                })
            }
            catch(e) {
                // Even if this fails, we will redirect user to the app page, as the 'major' task of registering the user was
                // successful, the user can update profile image later in settings. 
                sendToast(
                    "error", 
                    "Sorry! We were unable to add your avatar. Don't worry you can update it later in settings"
                )
                photoURL = "";
            }
            return {
                uid: data.user.uid,
                email: data.user.email as string,
                photoURL
            }
        }
        catch (err) {
            console.error(err);
            throw new Error(err as string)
        }
    }    
)

const initialState: AuthState =  {
    user: null,
    loading: true,
    loginOrRegisterMethod: null
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        updateUser: (state, action:PayloadAction<UserState>) => {
            state.user = action.payload
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
        // Signup with Email
        .addCase(registerWithEmail.pending, (state) => {
            state.loading = true
            state.loginOrRegisterMethod = "email"
        })
        .addCase(registerWithEmail.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload
            sendToast("success", "Awesome! Welcome to the Discord Clone")
        })
        .addCase(registerWithEmail.rejected, (state, action) => {
            state.loading = false
            state.loginOrRegisterMethod = null
            sendToast("error", action.error.message ? action.error.message: "Something went wrong :(")
        })

        // Signin With Google
        .addCase(googleSignIn.pending, (state) => {
            state.loading = true
            state.loginOrRegisterMethod = "google"
        })
        .addCase(googleSignIn.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload
            sendToast("success", "Welcome!")
        })
        .addCase(googleSignIn.rejected, (state, action) => {
            state.loading = false
            state.loginOrRegisterMethod = null
            sendToast("error", action.error.message ? action.error.message: "Something went wrong :(")
        })

        // Signin With Email
        .addCase(loginWithEmail.pending, (state) => {
            state.loading = true
            state.loginOrRegisterMethod = "email"
        })
        .addCase(loginWithEmail.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload
            sendToast("success", "Welcome back!")
        })
        .addCase(loginWithEmail.rejected, (state, action) => {
            state.loading = false
            state.loginOrRegisterMethod = null
            sendToast("error", action.error.message ? action.error.message: "Something went wrong :(")
        })
    }
})

export const {updateUser} = authSlice.actions
export default authSlice.reducer