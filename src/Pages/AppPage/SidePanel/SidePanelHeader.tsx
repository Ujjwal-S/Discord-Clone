import { useRef, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import searchIconUrl from "../../../assets/images/appPage/search_icon.svg";
import SidePanelDM from "./SidePanelDM";
import validateEmail from "../../../utils/checkValidEmail";
import sendToast from "../../../utils/sendToast";
import { DMFriendChat } from "../../../store/types";

type SearchUserState = {
    showSearchResult: boolean
    loading: boolean,
    result: DMFriendChat | null
}

const SidePanelHeader = (props: {createNewChannel: () => void}) => {
    const activeScreen = useAppSelector(state => state.appState.activeScreen)
    const searchUserInputRef = useRef<HTMLInputElement>(null)
    const friendsWith = useAppSelector(state => state.friendsWith.friendsWith)
    const me = useAppSelector(state => state.userAuth.user)
    const [searchState, setSearchState] = useState<SearchUserState>(
        {showSearchResult: false, loading: false, result: null}
    )
    
    function clearSearch() {
        setSearchState({showSearchResult: false, loading: false, result: null})
    }
    
    function getCombinedId(str1: string, str2: string) {
        if (str1 < str2) return str1+str2
        return str2+str1
    }

    async function searchUser(e:any) {
        if (searchUserInputRef.current?.value === "") {
            setSearchState({showSearchResult: false, loading: false, result: null})
        }
        if (e.key === "Enter") {
            e.preventDefault();  // To prevent insertion of \n because of enter key press
            const queryUser = searchUserInputRef.current?.value
            if (!queryUser) return clearSearch();
            if (!validateEmail(queryUser)) {
                sendToast("error", "That email looks wrong! Type a valid email to search for user")
                return clearSearch();
            }
            setSearchState(val => {return {...val, showSearchResult: true, loading: true}})
            for (let i = 0; i < friendsWith.length; ++i) {
                if (friendsWith[i].friendEmail === queryUser) {
                    searchState.result = friendsWith[i];
                    setSearchState({result: friendsWith[i], loading: false, showSearchResult: true})
                    return;
                }
            }
            try{
                // cloud function will return results of this query, for now using mock data
                // **MOCK DATA** ->
                let data = {
                    otherUserUid: "someuid",
                    otherUserEmail: "someemail@email.com",
                    otherUserPhotoURL: "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=32"
                }
                if (data.hasOwnProperty("otherUserUid")) {
                    let result = {
                        friendUid: data.otherUserUid,
                        friendEmail: data.otherUserEmail,
                        friendPhotoURL: data.otherUserPhotoURL,
                        // @ts-ignore
                        combinedId: getCombinedId(me.uid, data.otherUserUid),
                        lastMessage: "",
                        lastMessageTime: "",
                        firstTimeChat: true
                    }
                    setSearchState(val => {return {...val, loading: false, result}})
                } else {
                    sendToast("error", "User not found")
                    return clearSearch();
                }
            }
            catch(err) {
                sendToast("error", "Sorry, the request could not be completed, try again.")
                return clearSearch();
            }
        }
    }

    return (
        <>
            {activeScreen === "directMessages"
                ?
                    <div className="relative min-h-[47px] px-4 pt-1 select-none">
                        <input ref={searchUserInputRef} onKeyDown={searchUser} className="w-full bg-app-header-dark text-white rounded-[4px] py-2.5 pl-2 pr-8 text-sm leading-4 font-semibold tracking-wide outline-none border-none select-none" type="text" name="search_box_users" id="search_box_user" placeholder="Search Users" />
                        <img className="h-4 absolute right-7 top-3.5 select-none" src={searchIconUrl} alt="search icon" />
                    </div>
                :
                    <div className="min-h-[47px] px-4 pt-1 select-none flex justify-between items-center text-interactive-hover">
                        <h3 className="font-semibold">
                            Server Name
                        </h3>
                        <button className="text-2xl group relative" onClick={props.createNewChannel}>
                            +
                            <span className="tooltip-bottom group-hover:scale-100">
                                Create new Channel in Server
                            </span>
                        </button>
                    </div>
            }
            {/* Search Result */}
            {
                searchState.showSearchResult &&
                (
                    searchState.loading
                    ? 
                        <div className="min-h-[47px] px-4 pt-1 select-none flex justify-between items-center text-interactive-hover">
                            <div className=" py-2 w-full mx-auto">
                                <div className="animate-pulse flex space-x-4">
                                    <div className="rounded-full bg-slate-700 h-8 w-8"></div>
                                    <div className="flex-1 space-y-3 py-1">
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    : 
                        <div className="min-h-[47px] pr-4 pb-2 select-none flex justify-between items-center text-interactive-hover">
                            {searchState.result && <SidePanelDM friend={searchState.result} />}
                        </div>
                )
            }
        </>
    )
}

export default SidePanelHeader