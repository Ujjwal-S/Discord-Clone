import { QuerySnapshot, DocumentData, DocumentChange } from "firebase/firestore";
import { MessageType } from "../Pages/AppPage/AppView/Message";

export const pushMessagesToArr = (messages: QuerySnapshot<DocumentData>, combinedId: string) => {
    let arr:MessageType[] = new Array();

    messages.docs.forEach(doc => {
        const docData = doc.data();
        arr.push({
            id: doc.id,
            combinedId,
            imageURL: docData.imageURL,
            createdAt: docData.createdAt.toMillis(),
            createdAtObj: docData.createdAt,
            message: docData.message,
            senderPhotoURL: docData.senderPhotoURL,
            senderUid: docData.senderUid,
            senderEmail: docData.senderEmail
        })
    })

    return arr;
}

export const addMessageToArr = (message: DocumentChange<DocumentData>, arr: MessageType[], combinedId:string) => {
    const docData = message.doc.data()
    arr.push({
        id: message.doc.id,
        combinedId,
        imageURL: docData.imageURL,
        createdAt: docData.createdAt.toMillis(),
        createdAtObj: docData.createdAt,
        message: docData.message,
        senderPhotoURL: docData.senderPhotoURL,
        senderUid: docData.senderUid,
        senderEmail: docData.senderEmail
    })
}