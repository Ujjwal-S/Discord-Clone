export type Credentials = {
    email: string,
    password: string
}

export type UserInfo = {
    email: string,
    password: string,
    imageFile: File
}

export type UserState = {
    user: {
        uid: string,
        email: string,
        photoURL: string
    } 
    | null,
    loading: boolean,
    loginOrRegisterMethod: "email" | "google" | null
}
