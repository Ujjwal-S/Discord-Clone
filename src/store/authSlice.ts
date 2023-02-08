import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { createUserWithEmail } from "../firebase/auth";
import { auth } from "../firebase/firebase";
import { updateProfile } from "firebase/auth";
import { uploadImage } from "../firebase/storage";
import sendToast from "../utils/sendToast";


type UserInfo = {
    email: string,
    password: string,
    imageFile: File
}

export const registerWithEmail = createAsyncThunk( 'auth/registerWithEmail',
    async (userInfo: UserInfo) => {
        const {email, password, imageFile} = userInfo;

        try {
            // upload Image
            let photoURL = await uploadImage(imageFile);
            // create user
            const data = await createUserWithEmail(email, password);
            // set profile image
            try {
                auth.currentUser && await updateProfile(auth.currentUser, {
                    photoURL
                })
            }
            catch(e) {
                // Even if this fails, we will redirect user to the app page, as the 'major' task of registering the user was
                // successful, and as far as profile image is concerned, user can try to update it later in settings as well. 
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

type UserState = {
    user: {
        uid: string,
        email: string,
        photoURL: string
    } 
    | null,
    loading: boolean,
}

const initialState: UserState =  {
    user: null,
    loading: false,
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerWithEmail.pending, (state) => {
            state.loading = true
        })
        .addCase(registerWithEmail.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload
            sendToast("success", "Awesome! Your account was successfully created")
        })
        .addCase(registerWithEmail.rejected, (state, action) => {
            state.loading = false,
            sendToast("error", action.error.message ? action.error.message: "Something went wrong :(")
        })
    }
})

export default authSlice.reducer