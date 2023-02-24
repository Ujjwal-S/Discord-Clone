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

type ServerChat = {
    serverId: string,
    serverName: string,
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
export type ActiveChat = DMFriendChat | ServerChat | null

export type AppState = {
    activeScreen: ActiveScreen
    activeChat: ActiveChat
}
// activeChat, when activeScreen is directMessages will hold null
// if user clicks on a friend then that chat will loaded with DMChat (info)

// activeChat, when activeScreen is ServerChat will hold serverId, channelId,
// if server icon was clicked, then channelId will be null, only when user selects
// channel it will updated 




// appSlice

export type FriendsWithState = {
    friendsWith: DMFriendChat[]
    loading: boolean
}