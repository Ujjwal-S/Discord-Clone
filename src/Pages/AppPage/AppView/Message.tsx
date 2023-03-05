export type MessageType = {
    id: string,
    combinedId: string,
    message: string,
    imageURL: string | undefined
    createdAt: number,
    createdAtObj: {seconds:number, nanoseconds:number},
    senderUid: string,
    senderEmail: string,
    senderPhotoURL: string,
}

const Message = (props: MessageType) => {

    return (
        <div className="flex px-4 py-3 hover:bg-chat-hover-bg mt-1">
            <div className="h-8 w-8 mr-3">
                <img
                    className="h-8 rounded-full select-none cursor-pointer" draggable={false}
                    src={props.senderPhotoURL}
                    alt="user profile picture" 
                />
            </div>
            <div>
                {/* Message Info */}
                <div className="mb-1">
                    <span className="text-chat-username-color text-sm cursor-pointer font-medium mr-2">
                        {props.senderEmail.slice(0, props.senderEmail.lastIndexOf("@"))}
                    </span>
                    <span className="text-chat-message-timestamp text-xs font-semibold space-x-2">
                        {new Date(props.createdAt).toLocaleString()}
                    </span>
                </div>
                {/* Message Content */}
                <div>
                    {props.imageURL && <img src={`${props.imageURL}`} className="w-auto h-auto max-w-[60%] mb-3 mt-2 cursor-pointer" alt="user sent image" />}
                    <p className="text-chat-message-color ">
                        {props.message}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Message;