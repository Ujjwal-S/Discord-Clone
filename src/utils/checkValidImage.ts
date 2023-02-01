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

const validateImage = async (file: File) => {
    const buffers = await readBuffer(file, 0, 8);
    const uinit8Array = new Uint8Array(buffers);
    return validateImageTypes(uinit8Array);
}

export default validateImage;