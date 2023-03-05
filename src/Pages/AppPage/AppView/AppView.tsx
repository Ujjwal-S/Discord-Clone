import { useState, useEffect, useCallback } from "react";
import AppHeader from "./AppHeader";
import Message, { MessageType } from "./Message";
import SmallScreenSizeWarning from "./SmallScreenSizeWarning";
import UserInput from "./UserInput";
import WumpusImage from "../../../assets/images/appPage/wumpus.svg"
import { useAppSelector } from "../../../store/hooks";
import { collection, limitToLast, onSnapshot, orderBy, query, getDocs, Timestamp, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { addDataToCacheStore, getDataFromCache } from "../../../indexedDb";
import sendToast from "../../../utils/sendToast";
import { addMessageToArr, pushMessagesToArr } from "../../../utils/pushMessagesToArr";

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
    const { activeChat, activeChannel} = useAppSelector(state => state.appState)
    const [messages, setMessages] = useState<MessageType[]>([]);

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
        if (!ref || !combinedId) return;

        let unsub:Function|null = null;

        (async function () {
            try{
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
                
                const lastCreatedAtObj = cachedMessages[cachedMessages.length-1].createdAtObj
                const lastCreatedAtTimestamp = new Timestamp(lastCreatedAtObj.seconds, lastCreatedAtObj.nanoseconds);
                
                const q = query(ref, orderBy("createdAt"), where("createdAt", ">", lastCreatedAtTimestamp));
                unsub = onSnapshot(q, (querySnapshot) => {
                    let arr:MessageType[] = []
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === "added") {
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
            }catch(e) {
                console.log(e)
            }
        })()

        return () => {
            unsub && unsub();
        }
    }, [activeChat])

    async function getPrevMessages() {
        let ref = null, combinedId = "";
        if (activeChat && activeChat.combinedId){
            combinedId = activeChat.combinedId
            ref = collection(db, `directMessages/${combinedId}/chats/`)
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
            <div className="grow overflow-auto scrollable">
                <button onClick={getPrevMessages} className="bg-blue-600 text-white">Load Prev</button>
                {/* Render Message here */}
                {messages.map(message => 
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
            {messages.length < 1
                ? 
                    <div className="grow mx-4 flex justify-center items-center">
                        <img src={WumpusImage} className="select-none relative bottom-4" draggable={false} alt="Wumpus" />
                    </div>
                : null
            }

            <UserInput screenSize={screenSize} />
        </div>
    )
}

export default AppView;