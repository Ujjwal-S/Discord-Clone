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
    uid: string,
    email: string,
    photoURL: string
} | null

export type AuthState = {
    user: UserState,
    loading: boolean,
    loginOrRegisterMethod: "email" | "google" | null
}
