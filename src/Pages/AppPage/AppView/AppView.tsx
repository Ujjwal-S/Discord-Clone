import { useState, useEffect, useCallback, useRef } from "react";
import AppHeader from "./AppHeader";
import Message, { MessageType } from "./Message";
import SmallScreenSizeWarning from "./SmallScreenSizeWarning";
import UserInput from "./UserInput";
import WumpusImage from "../../../assets/images/appPage/wumpus.svg"
import { useAppSelector } from "../../../store/hooks";
import { collection, limitToLast, onSnapshot, orderBy, query, getDocs, Timestamp, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { addDataToCacheStore, getDataFromCache } from "../../../indexedDb";
import sendToast from "../../../utils/sendToast";
import { addMessageToArr, pushMessagesToArr } from "../../../utils/pushMessagesToArr";
import { getDownloadURL } from "firebase/storage";

const debouce = (callback: Function, delay: number): Function => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return (...args:any) => {
        if (timer) clearTimeout(timer);
        // Keep a reference to the context of this function, because remember setTimeout
        // creates its own execution context, therefore the callback function would then
        // be called for setTimeouts context rather than this function's context.
        let context = this;

        timer = setTimeout(() => {
            callback.apply(context, args)
        }, delay)
    }
}

const pageSize = 6;

const AppView = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const { activeChat, activeServer } = useAppSelector(state => state.appState)
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [showMessages, setShowMessages] = useState(false)

    const resizeHandler = useCallback(
        debouce(() => {
            setScreenSize(window.innerWidth);
        }, 200), 
        []
    )

    useEffect(() => {
        // @ts-ignore
        window.addEventListener("resize", resizeHandler);
        return () => {
            // @ts-ignore
            window.removeEventListener("resize", resizeHandler)
        }
    }, [])

    useEffect(() => {
        let ref = null, combinedId = "";
        if (activeChat && activeChat.combinedId){
            combinedId = activeChat.combinedId
            ref = collection(db, `directMessages/${combinedId}/chats/`)
        }
        if (activeServer !== "directMessages" && activeServer.serverId) {
            if (!activeServer.channelId) return setMessages([])
            combinedId = activeServer.serverId + activeServer.channelId
            ref = collection(db, `servers/${activeServer.serverId}/channels/${activeServer.channelId}/chats/`)
        }
        if (!ref || !combinedId) return setShowMessages(false);
        
        let unsub:Function|null = null;

        (async function () {
            try{
                setMessages([])
                let cachedMessages = await getDataFromCache(combinedId, pageSize, 1);           
                if (cachedMessages.length === 0) {
                    const q = query(ref, orderBy("createdAt"), limitToLast(6));
                    const data = await getDocs(q)
                    let arr:MessageType[] = []

                    arr = pushMessagesToArr(data, combinedId)

                    if (arr.length > 0) {
                        await addDataToCacheStore(arr);
                    }
                    cachedMessages = arr;
                }
                setMessages(cachedMessages)
                
                let q  = query(ref, orderBy("createdAt"), limitToLast(pageSize));
                if (cachedMessages.length > 0) {
                    const lastCreatedAtObj = cachedMessages[cachedMessages.length-1].createdAtObj
                    const lastCreatedAtTimestamp = new Timestamp(lastCreatedAtObj.seconds, lastCreatedAtObj.nanoseconds);
                    q = query(ref, orderBy("createdAt"), where("createdAt", ">", lastCreatedAtTimestamp));
                    console.log("q changed")
                }
                
                unsub = onSnapshot(q, (querySnapshot) => {
                    let arr:MessageType[] = []
                    querySnapshot.docChanges().forEach(change => {
                        if ((change.type === "added" || change.type === "modified") && !querySnapshot.metadata.hasPendingWrites) {
                            console.log("Triggered")
                            console.log(change.doc.data())
                            addMessageToArr(change, arr, combinedId)
                        }
                    })
                    arr.length && addDataToCacheStore(arr)
                    .then(() => {
                        setMessages(val => {
                            return [...val, ...arr]
                        })
                    })
                })
                setShowMessages(true)
            }catch(e) {
                console.log(e)
            }
        })()

        return () => {
            unsub && unsub();
        }
    }, [activeChat, activeServer])


    async function getPrevMessages() {
   
        let ref = null, combinedId = "";

        if (activeChat && activeChat.combinedId){
            combinedId = activeChat.combinedId
            ref = collection(db, `directMessages/${combinedId}/chats/`)
        }
        if (activeServer !== "directMessages" && activeServer.serverId) {
            if (!activeServer.channelId) return setMessages([])
            combinedId = activeServer.serverId + activeServer.channelId
            ref = collection(db, `servers/${activeServer.serverId}/channels/${activeServer.channelId}/chats/`)
        }

        if (!ref || !combinedId) return;
        if (messages.length < 1) return;
        
        try{
            let cachedMessages = await getDataFromCache(combinedId, pageSize, (messages.length/pageSize)+1);
            if (cachedMessages.length === 0) {
                const firstCreatedAtObj = messages[0].createdAtObj
                const firstCreatedAtObjTimestamp = new Timestamp(firstCreatedAtObj.seconds, firstCreatedAtObj.nanoseconds);
                
                const q = query(ref, 
                    orderBy("createdAt"), 
                    where("createdAt", "<", firstCreatedAtObjTimestamp), 
                    limitToLast(pageSize)
                )
                
                let arr:MessageType[] = [];
                const data = await getDocs(q);
                
                arr = pushMessagesToArr(data, combinedId)
                
                arr.length && await addDataToCacheStore(arr);
                cachedMessages = arr;

            }
            setMessages(val => {
                return [...cachedMessages, ...val]
            })
            
        }catch(e) {
            sendToast("error", "Failed to retrieve previous messages.")
        }
    }
 
    return (
        <div className="w-full h-full overflow-y-auto flex flex-col">
            {(screenSize < 780) && <SmallScreenSizeWarning />}
            <AppHeader directMessage={true} screenSize={screenSize}/>
            <div className="grow overflow-y-auto scrollable px-4">
                { (activeChat || (activeServer !== "directMessages" && activeServer.channelId)) &&
                    <div className="flex justify-center">
                        <button onClick={getPrevMessages} 
                            className="px-5 mt-2 hover:cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="cyan" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                            </svg>
                        </button>
                    </div>
                }
                {showMessages && messages.map(message => 
                    <Message
                        key={message.id}
                        id={message.id}
                        combinedId={message.combinedId}
                        createdAt={message.createdAt}
                        createdAtObj={message.createdAtObj}
                        imageURL={message.imageURL}
                        message={message.message}
                        senderPhotoURL={message.senderPhotoURL}
                        senderUid={message.senderUid}
                        senderEmail={message.senderEmail}
                    />
                )}
            </div>
            {!showMessages || messages.length < 1
                ? 
                    <div className="grow mx-4 flex justify-center items-center">
                        <img src={WumpusImage} className="select-none relative bottom-36" draggable={false} alt="Wumpus" />
                    </div>
                : null
            }

            <UserInput screenSize={screenSize} />
        </div>
    )
}

export default AppView;