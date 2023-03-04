import { MessageType } from "./Pages/AppPage/AppView/Message";

export const isIndexedDbAvailable = () => {
    // 'indexedDB' variable is defined in the outer scope, which is the global window object
    return indexedDB ? true : false; 
}


const getDiscordCloneStore = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        if (!isIndexedDbAvailable()) {
            return reject(
            "IndexedDb not found. Are you using incognito mode? Some browsers require you to explicitly turn on indexDb in incognito mode."
            )
        }
        
        const request = indexedDB.open("DiscordCloneStore", 1);

        request.onerror = (event) => {
            return reject("Failed To 'open' a connection to indexedDB")
        }
        request.onupgradeneeded = () => {
            // only fires the very first time that we open a brand new database, 
            // or when we increase the version number
            const db = request.result;

            const store = db.createObjectStore("chats", {keyPath: 'id'})
            store.createIndex("combinedId_and_createdAt", ["combinedId", "createdAt"])

            const lastMessageTimeStore = db.createObjectStore("lastMessageTime", {keyPath: "combinedId"})
            lastMessageTimeStore.createIndex("combinedId", ["combinedId"])
        }
        request.onsuccess = (event) =>{
            //@ts-ignore
            return resolve(event.target.result)
        }
    })
}

export const addDataToCacheStore = (messagesArr: MessageType[]): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await getDiscordCloneStore()

            const transaction = db.transaction("chats", "readwrite")
            const chatStore = transaction.objectStore("chats")

            messagesArr.forEach(messageObj => {
                chatStore.put({
                    ...messageObj
                })
            })
            transaction.onerror = (event) => {
                return reject("Failed to add data to database.")
            }

            const transaction2 = db.transaction("lastMessageTime", "readwrite");
            const lastMessageTimeStore = transaction2.objectStore("lastMessageTime");
            const putReq = lastMessageTimeStore.put({ // 'Upsert' lastMessageTime
                combinedId: messagesArr[messagesArr.length-1].combinedId,
                createdAt: messagesArr[messagesArr.length-1].createdAt
            })
            putReq.onerror = (err) => console.log(err)
            transaction2.onerror = (event) => {
                return reject("Failed to add data to database.")
            }
            return resolve()
        }
        catch(e) {
            return reject(e);
        }
    })
}

export const getDataFromCache = (combinedId:string, pageSize: number, pageNumber: number): Promise<MessageType[]> => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await getDiscordCloneStore()

            const transaction = db.transaction("lastMessageTime", "readwrite")
            const lastMessageTimeStore = transaction.objectStore("lastMessageTime")
            const index = lastMessageTimeStore.index("combinedId")

            const indexQuery = index.get([combinedId])

            indexQuery.onsuccess = () => {
                const lastMessageTime = indexQuery.result?.createdAt
                if (!lastMessageTime) return resolve([]);

                const transaction = db.transaction("chats", "readonly")
                const chatStore = transaction.objectStore("chats")
                const combinedIdCreatedAtIndex = chatStore.index("combinedId_and_createdAt")

                const lowerBound = [combinedId, 0]
                const upperBound = [combinedId, lastMessageTime]
                const range = IDBKeyRange.bound(lowerBound, upperBound)

                let arr:MessageType[] = []
                const offset = pageSize * (pageNumber - 1)
                let hasSkipped = false

                combinedIdCreatedAtIndex.openCursor(range, "prev").onsuccess = function(e) {
                    // @ts-ignore
                    let cursor = e.target.result
                    
                    if (!hasSkipped && offset > 0) {
                        cursor.advance(offset);
                        hasSkipped = true;
                        return;
                    }

                    if (cursor) {
                        if (arr.length < pageSize) {
                            arr.unshift(cursor.value)
                            cursor.continue()
                        } else {
                            return resolve(arr);
                        }
                    } else {
                        return resolve(arr);
                    }
                }
            }
        }
        catch(e) {
            return reject(e);
        }
    })
}