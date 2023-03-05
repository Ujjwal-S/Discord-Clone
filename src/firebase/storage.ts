import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const BUCKET_URL = "gs://discord-ka-clone.appspot.com"

export function uploadImage(image: File, type: "forMessage" | "forAvatar"): Promise<string> {

    return new Promise(async (resolve, reject) => {
        let uniqueName = "";
        let bucket = ""
        
        if (type === "forAvatar") {
            uniqueName = `avatar-${Date.now()}-${Math.round(Math.random() * 1E9)}`;
            bucket = `${BUCKET_URL}/avatar/${uniqueName}`
        }else {
            uniqueName = `messageImages-${Date.now()}-${Math.round(Math.random() * 1E9)}`;
            bucket = `${BUCKET_URL}/messageImages/${uniqueName}`
        }

        try {
            const data = await uploadBytes(ref(storage, bucket), image);
            const imageUrl = await getDownloadURL(data.ref)
            return resolve(imageUrl)
        }catch(e) {
            return reject("There was some problem, uploading image");
        }
    })

}