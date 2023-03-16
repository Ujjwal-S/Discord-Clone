import { useState, useEffect } from "react";
import { DMFriendChat } from "../../../store/types";
import { updateLastMessage } from "../../../store/friendsWithSlice";
import { updateAppState } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { collection, onSnapshot, query, orderBy, limitToLast } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const SidePanelDM = (props: {friend:DMFriendChat}) => {
    const [lastMessage, setLatestMessage] = useState(props.friend.lastMessage)
    const [lastMessageTime, setLatestMessageTime] = useState(props.friend.lastMessageTime)
    const activeChat = useAppSelector(state => state.appState.activeChat)
    const dispatch = useAppDispatch();

    useEffect(() => {
        let unsub:any = undefined;
        if (!props.friend.firstTimeChat) {
            const directMessagesRef = collection(db, `directMessages/${props.friend.combinedId}/chats/`)
            const q = query(directMessagesRef, orderBy("createdAt"), limitToLast(1))
            unsub = onSnapshot(q, (querySnapshot) => {
                if (querySnapshot.docs.length > 0 && !querySnapshot.metadata.hasPendingWrites){
                    const d = querySnapshot.docs[0].data().createdAt.toDate().toString()
                    setLatestMessage(querySnapshot.docs[0].data().message)
                    setLatestMessageTime(d)
                    dispatch(
                        updateLastMessage({  // this will update list sort as well
                            combinedId: props.friend.combinedId,
                            lastMessage: querySnapshot.docs[0].data().message,
                            lastMessageTime: querySnapshot.docs[0].data().createdAt.toDate().toString()
                        })
                    )
                }
            }, (error) => {
                console.log(error)
            })
        }
        return () => {
            unsub && unsub()
        }
    }, [])

    const selectChat = () => {
        if (activeChat?.friendUid === props.friend.friendUid) return;
        let thisChat: DMFriendChat = {
            combinedId: props.friend.combinedId,
            friendUid: props.friend.friendUid, 
            friendPhotoURL: props.friend.friendPhotoURL, 
            friendEmail: props.friend.friendEmail, 
            lastMessage, 
            lastMessageTime,
            firstTimeChat: props.friend.firstTimeChat
        }
        dispatch(updateAppState({
            activeScreen: "directMessages",
            activeChat: thisChat,
            activeServer: "directMessages"
        }))
    }

    return(
        <li 
        onClick={selectChat}
        className="group mt-2 flex items-center ml-2 max-w-[224px] min-w-[224px] py-[5px] px-2 rounded cursor-pointer hover:bg-background-modifier-hover">
            <div className="avatar h-8 w-8 mr-3">
                <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                    <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                        {
                            props.friend.friendPhotoURL !== ""
                            ? <img className="rounded-full select-none" draggable="false" src={props.friend.friendPhotoURL} alt="User Avatar" aria-hidden="true" />
                            : <img className="rounded-full select-none" draggable="false" src="https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=32" alt="User Avatar" aria-hidden="true" />
                        }
                    </foreignObject>
                    <circle cx="27" cy="27" r="6" stroke="#2f3136" strokeWidth="3" fill="#00A55D" />
                </svg>
            </div>
            <div className="userInfo whitespace-nowrap overflow-ellipsis overflow-hidden select-none">
                {/* Username */}
                <p className="group-hover:text-interactive-hover text-sidepanel-text-color leading-5 font-semibold select-none">
                    {props.friend.friendEmail}
                </p>
                {/* Latest Message */}
                <p className="group-hover:text-interactive-hover text-sidepanel-text-color text-xs text-ellipsis overflow-hidden">
                    {lastMessage}
                </p>
            </div>
        </li>
    )
}

export default SidePanelDM;