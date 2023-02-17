import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const BUCKET_URL = "gs://discord-ka-clone.appspot.com"

export function uploadImage(image: File): Promise<string> {

    return new Promise(async (resolve, reject) => {
        const uniqueName = `avatar-${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        const bucket = `${BUCKET_URL}/avatar/${uniqueName}`
        
        try {
            const data = await uploadBytes(ref(storage, bucket), image);
            const imageUrl = await getDownloadURL(data.ref)
            return resolve(imageUrl)
        }catch(e) {
            return reject("There was some problem, uploading your avatar image");
        }
    })

}