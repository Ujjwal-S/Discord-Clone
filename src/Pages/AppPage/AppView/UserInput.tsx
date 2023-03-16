import { useRef, useState } from "react";
import griningFaceEmojiUrl from "../../../assets/images/appPage/grinning_face_emoji.png";
import sendMessageIconUrl from "../../../assets/images/appPage/paper-plane.png";
import { handleImageSelect } from "../../../utils/checkValidImage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { uploadImage } from "../../../firebase/storage";
import { db } from "../../../firebase/firebase";
import { useAppSelector } from "../../../store/hooks";
import sendToast from "../../../utils/sendToast";


type UserInputProps = {
    screenSize: number
}

const UserInput = (props: UserInputProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const imagePreviewRef = useRef<HTMLImageElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const [imagePreviewLink, setImagePreviewLink] = useState("")
    const {activeScreen, activeChat, activeServer} = useAppSelector(state => state.appState)
    const me = useAppSelector(state => state.userAuth.user)

    const onChangeHandler = function(e: any) {
        const target = e.target as HTMLTextAreaElement;

        if(textareaRef.current) {
            e.target.style.height = 'inherit';
            if (target.scrollHeight > 100) {
                textareaRef.current.style.overflowY = "scroll"
            }
            else {
                textareaRef.current.style.overflowY = "hidden"
            }
            textareaRef.current.style.height = `${target.scrollHeight}px`;
        }
    };

    const checkEnterKey = (e:any) => {
        if (e.key === "Enter") {
            e.preventDefault();  // To prevent insertion of \n because of enter key press
            formRef.current?.dispatchEvent( 
                new Event("submit", {  // triggers submitHandler function
                    'bubbles': true,
                })
            )
        }
    }

    const clearImageInput = () => {
        if (imageInputRef) {
            imageInputRef.current!.value = "";
            setImagePreviewLink("");
        }
    }

    async function handleFileSelect(e:React.ChangeEvent<HTMLInputElement>) {
        try {
            const data = await handleImageSelect(e);
            setImagePreviewLink(data)
        } catch (e) {
            clearImageInput();
        }
    }

    async function submitHandler(e:any) {
        e.preventDefault();
        if (!textareaRef.current?.value) return;

        let ref = null, combinedId = "";
        if (activeChat && activeChat.combinedId){
            combinedId = activeChat.combinedId
            ref = collection(db, `directMessages/${combinedId}/chats/`)
        }
        if (!ref || !combinedId || !me || !formRef.current) return;

        try {
            const formData = new FormData(formRef.current)
            const message = formData.get("user_input_message") as string
            let sendMessageObj:any = {
                senderUid: me.uid,
                senderEmail: me.email,
                senderPhotoURL: me.photoURL,
                createdAt: serverTimestamp(),
                message
            }
            if (imagePreviewLink) {
                const image = formData.get("imageInp") as File
                const imageURL = await uploadImage(image, "forMessage")
                sendMessageObj["imageURL"] = imageURL
            }

            addDoc(ref, sendMessageObj)
            textareaRef.current.value = ''
            clearImageInput()
        } catch (e) {
            console.log(e)
            sendToast("error", "Sending message failed :(")
        }
    }

    const getActiveChat = () => {
        if (activeChat) return activeChat.friendEmail
        if (activeServer !== "directMessages") {
            if (activeServer.channelName) return activeServer.channelName
            return activeServer.serverName
        }
        return "";
    }

    return (
        <form ref={formRef} onSubmit={(e) => submitHandler(e)}
        >   
        <fieldset className="flex mx-4 mb-6 mt-2 bg-chat-input-bg" disabled={activeChat ? false : true}>
            <div className="h-11 py-2.5 px-4 group cursor-pointer flex" >
                <label htmlFor="imageInp">
                    <svg className="text-app-icon-inactive group-hover:text-interactive-hover h-6 w-6 cursor-pointer" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z">
                        </path>
                    </svg>
                </label>
                <input 
                    ref={imageInputRef} 
                    type="file" 
                    className="hidden" 
                    name="imageInp" id="imageInp" multiple={false} 
                    accept="image/*" 
                    onChange={handleFileSelect}
                />
                <img ref={imagePreviewRef} src={imagePreviewLink} className={`max-h-8 max-w-[50px] pl-3 ${imagePreviewLink ? '' : 'hidden'}`} alt="Image Preview" />
            </div>
            <div className="grow">
                <textarea 
                    ref={textareaRef} 
                    name="user_input_message" 
                    id="user_input_message" 
                    onChange={(e) => onChangeHandler(e)} 
                    onKeyDown={checkEnterKey}
                    rows={1}
                    className="p-2 h-8.5 w-full resize-none max-h-[100px] mt-[5px] bg-chat-input-bg text-white outline-none scrollable overflow-x-hidden"
                    placeholder={`Message ${props.screenSize < 900 ? '' : getActiveChat()}`}
                ></textarea>
            </div>
            
            <div className="flex items-start">

                <div className="h-11 py-2.5 px-4 group cursor-pointer">
                    <button type="submit">
                        <img src={sendMessageIconUrl} className="select-none relative top-0.5 group-hover:brightness-125 max-h-[23px] min-h-[23px] min-w-[23px]" draggable="false" alt="send messages" />
                    </button>
                </div>

                <div className="h-11 py-2.5 px-4 group cursor-pointer">
                    <svg className="text-app-icon-inactive group-hover:text-interactive-hover" width="25" height="25" aria-hidden="true" role="img" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z">
                        </path>
                    </svg>
                </div>

                <div className="h-11 pb-2.5 pt-[13px] px-4 group scale-95 cursor-pointer">
                    <svg className="text-app-icon-inactive group-hover:text-interactive-hover" width="20" height="20" aria-hidden="true" role="img" viewBox="0 0 20 20">
                        <path fill="currentColor"  fillRule="evenodd" clipRule="evenodd" d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"></path><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z">
                        </path>
                    </svg>
                </div>
                
                <div className="h-11 py-2.5 px-4 group cursor-pointer">
                    <img src={griningFaceEmojiUrl} className="select-none brightness-90 grayscale group-hover:brightness-100 h-7 min-w-[28px]" draggable="false" alt="emojis" />
                </div>
            </div>
        </fieldset>
        </form>
    )
}

export default UserInput;