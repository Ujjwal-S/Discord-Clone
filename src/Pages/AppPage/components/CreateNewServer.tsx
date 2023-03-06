import {useState, useRef, ChangeEvent} from "react";
import { handleImageSelect } from "../../../utils/checkValidImage";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import sendToast from "../../../utils/sendToast";

const CreateNewServer = (props: {onClose: () => void}) => {
    const [imagePreviewLink, setImagePreviewLink] = useState("")

    const imagePreviewRef = useRef<HTMLImageElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);

    const clearImageInput = () => {
        if (imageInputRef) {
            imageInputRef.current!.value = "";
            setImagePreviewLink("")
        }
    }

    const handleFileSelect = async (event:ChangeEvent<HTMLInputElement>) => {
        try{
            const data = await handleImageSelect(event)
            setImagePreviewLink(data)
        }catch (e) {
            clearImageInput()
            console.log("Error uploading image...", e)
        }
    }

    return (
        <Modal heading="Create New Server" onClose={props.onClose}>
            <div className="p-1 w-72 md:w-[500px]">
                <div className="w-full mt-5">
                    <label className="uppercase mb-2 block text-xs font-bold tracking-wide" htmlFor="new-server-name">Server Name <span className="text-red-400">*</span></label>
                    <input type="text" className="w-full h-10 p-[10px] border-none rounded-sm outline-none text-white bg-[color:#202225]" name="new-server-name" id="new-server-name" autoComplete="false" autoCorrect="false" autoCapitalize="false" spellCheck="false" />
                </div>
                <div className="flex w-full justify-between items-end my-4">
                    <label className="uppercase mb-2 inline-block text-xs font-bold tracking-wide">Choose Server Image <span className="text-red-400">*</span></label>
                    <div className="flex">
                        {imagePreviewLink && <img ref={imagePreviewRef} src={imagePreviewLink} className="max-h-8 max-w-[50px] pr-3" />}
                        <label className="uppercase inline-block text-xs font-bold tracking-wide border border-gray-600 p-2 py-1.5 cursor-pointer text-emerald-500 hover:bg-[#303030] rounded-sm" htmlFor="new-server-image">Browse</label>
                        <input ref={imageInputRef} type="file" onChange={handleFileSelect} className="hidden" name="new-server-image" id="new-server-image" multiple={false} accept="image/*"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Button size="sm" color="purple" width="contain">
                    Create Channel
                </Button>
            </div>
        </Modal>
    )
}

export default CreateNewServer;