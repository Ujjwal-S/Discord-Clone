import { createUserWithEmailAndPassword, User, UserCredential } from "firebase/auth";
import { auth } from "./firebase";
import sendToast from "../utils/sendToast";
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
        }
    })
}