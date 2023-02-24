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
        
        async function getLastMessage(arr:DMFriendChat[]) {
            const promises = arr.map(async (item) => {
                const directMessagesRef = collection(db, `directMessages/${item.combinedId}/chats/`);
                const q = query(directMessagesRef, orderBy("createdAt"), limitToLast(1));
                const result = await getDocs(q);
                const data = result.docs[0];
                item["lastMessage"] = data.data().message;
                item["lastMessageTime"] = data.data().createdAt.toDate().toString()
                return item;
            })

            const results = await Promise.allSettled(promises);
            return results;
        }

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
                        lastMessage: "",                                     // default values incase is fetching
                        lastMessageTime: new Date("1970-12-01").toString()   // lastMessage fails
                        // this defaults to a very old date, so that if fetching fails,
                        // this chat is automatically pushed to last (after sorting)
                    })
                }
            })
            await getLastMessage(friends)
            dispatch(
                updateFriendsList(friends)
            )
        })

        return () => unsub()
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