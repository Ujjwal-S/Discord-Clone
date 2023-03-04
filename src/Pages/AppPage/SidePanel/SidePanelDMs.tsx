import { useEffect } from "react";
import loadingDiscordLogo from "../../../assets/images/appPage/discord-logo-loading.gif"
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { DMFriendChat } from "../../../store/types";
import { updateFriendsList } from "../../../store/friendsWithSlice";
import SidePanelDM from "./SidePanelDM";
import { collection, query, where, onSnapshot, orderBy, limitToLast, getDocs } from "firebase/firestore"
import { db } from "../../../firebase/firebase";

const SidePanelDMs = () => {
    const {friendsWith, loading} = useAppSelector(state => state.friendsWith)
    const me = useAppSelector(state => state.userAuth.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const friendsWithRef = collection(db, "friendsWith");
        const q = query(friendsWithRef, where("myUid", "==", me?.uid))
        
        const unsub = onSnapshot(q, async (querySnapshot) => {
            let friends:DMFriendChat[] = [];
            querySnapshot.docChanges().forEach(change => {

                if (change.type === "added") {
                    const data = change.doc.data()
                    friends.push({
                        combinedId: data.combinedId,
                        friendEmail: data.friendEmail,
                        friendPhotoURL: data.friendPhotoURL,
                        friendUid: data.friendUid,
                        firstTimeChat: false,
                        // default values
                        lastMessage: "",                                     
                        lastMessageTime: new Date("1970-12-01").toString()
                    })
                }
            })
            dispatch(
                updateFriendsList(friends)
            )
        })

        return () => {
            unsub()
        }
    }, []) 


    return (
        <>
            {loading
                ? 
                    <div className="h-full flex flex-col items-center justify-start opacity-50">
                        <img src={loadingDiscordLogo} className="w-28 h-28" alt="Loading..." />
                        <div className="text-white">Loading DMs ...</div>
                    </div>
                : friendsWith.map(friend => <SidePanelDM key={friend.friendUid} friend={friend} />)
            }
        </>
    )
}

export default SidePanelDMs;