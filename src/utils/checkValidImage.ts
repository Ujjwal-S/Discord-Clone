import sendToast from "./sendToast"

const check = (headers: number[]): (arg0: Uint8Array)=>boolean => {
    return (buffers:Uint8Array) => {
        for (let i = 0; i < headers.length; ++i) {
            if (headers[i] !== buffers[i]) return false;
        }
        return true;
    }
}

const validateImageTypes = (buffer:Uint8Array) => {
    const isPNG = check([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])(buffer);
    if (isPNG) return true;
    const isJPG = check([0xFF, 0xD8, 0xFF])(buffer)
    if (isJPG) return true;
    return false;
}

const readBuffer = async (file:File, start:number, end:number): Promise<ArrayBuffer> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file.slice(start, end));
        reader.onerror = () => {
            reject("There was some problem reading the file")
        }
        reader.onload = () => {
            resolve(reader.result as ArrayBuffer)
        }
    })
}

const validateImageType = async (file: File) => {
    const buffers = await readBuffer(file, 0, 8);
    const uinit8Array = new Uint8Array(buffers);
    return validateImageTypes(uinit8Array);
}

export default validateImageType

export const imageWithinSizeLimit = (file: File) => {
    return file.size < 524288;
}

export const handleImageSelect = (e:React.ChangeEvent<HTMLInputElement>): Promise<string> => {
    return new Promise(async (resolve, reject) =>{
        if (!e.target.files || e.target.files.length < 1) return "";
        const file = e.target.files[0];
        if (!imageWithinSizeLimit(file)) {
            sendToast('error', 'File size beyond allowed range! Choose a file lesser than 0.5MB')
            return reject();
        }
        const valid = await validateImageType(file);
        if (valid) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onerror = function() {
                sendToast("error", "Something went wrong with selected image.")
            }
            fileReader.onload = function (ev) {
                if (ev.target?.result) return resolve(ev.target.result as string)
                return reject();
            }
        }else {
            sendToast("error", "We only accept PNG or JPEG files as Avatar images. It's possible that your file has a false (even if it says .png or .jpg) OR incorrect extension name.")
            return reject();
        }
    })
}