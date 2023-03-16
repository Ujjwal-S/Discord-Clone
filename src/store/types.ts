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

export type ServerChat = {
    serverId: string,
    serverName: string,
    serverPhotoURL: string,
    channelId: string | null
    channelName: string | null
}

export type DMFriendChat = {
    combinedId: string,
    friendUid: string,
    friendPhotoURL: string,
    friendEmail: string,
    lastMessage: string,
    lastMessageTime: string,
    firstTimeChat: boolean
}

export type ActiveScreen = "directMessages" | "server"

export type AppState = {
    activeScreen: ActiveScreen
    activeChat: DMFriendChat | null
    activeServer: ServerChat | "directMessages"
}


// appSlice
export type FriendsWithState = {
    friendsWith: DMFriendChat[]
    loading: boolean
}
