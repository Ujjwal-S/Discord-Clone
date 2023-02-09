import { 
    createUserWithEmailAndPassword, UserCredential,
    signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./firebase";
import { FirebaseError } from "firebase/app";

export function createUserWithEmail(email: string, password: string): Promise<UserCredential> {

    return new Promise(async (resolve, reject) => {
        try {
            const data = await createUserWithEmailAndPassword(auth, email, password);
            return resolve(data);
        }
        catch(e) {
            const err = e as FirebaseError
            if (err.code === "auth/email-already-in-use") {
                return reject("An account with this email already exists.");
            }
            if (err.code === "auth/invalid-email") {
                return reject("That looks like an invalid email address.");
            }
            if (err.code === "auth/operation-not-allowed") {
                return reject("It looks like your account is not enabled, contact admin");
            }
            if (err.code === "auth/weak-password") {
                return reject("Password must be atleast 6 characters long");
            }
            reject("Error while registering account.")
        }
    })
}

const provider = new GoogleAuthProvider();
auth.languageCode = 'it'

export function signInWithGoogle(): Promise<UserCredential> {
   
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
        .then(result => resolve(result))
        .catch(error => {
            console.error(error)
            reject("Something went wrong while signing in with Google, Please try again!")
        })
    })
}


export function signInWithEmail(email: string, password: string): Promise<UserCredential> {

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => resolve(result))
        .catch(error => {
            console.error(error)
            if (error.code === "auth/invalid-email") {
                return reject("That looks like an invalid email address.");
            }
            if (error.code === "auth/user-disabled") {
                return reject("It looks like your account is not enabled, contact admin");
            }
            if (error.code === "auth/user-not-found") {
                return reject("You do not have an account with us. Please Register");
            }
            if (error.code === "auth/wrong-password") {
                return reject("Wrong Password, try again!");
            }
            return reject("Error while logging in this account.")
        })
    })
}