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

// appSlice

type ServerScreen = {
    serverId: string,
    channelId: string | null
}

export type ActiveScreen = "directMessages" | "server"
export type ActiveChat = string | ServerScreen | null

export type AppState = {
    activeScreen: ActiveScreen
    activeChat: ActiveChat
}
// activeChat, when activeScreen is DM, will hold combinedId
// activeChat, when activeScreen is ServerScreen will hold serverId, channelId,
// if server icon was clicked, then channelId will be null, only when user selects
// channel it will updated 