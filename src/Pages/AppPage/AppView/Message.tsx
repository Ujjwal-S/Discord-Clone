const Message = (props: {message: string, imageUrl?: string}) => {
    return (
        <div className="flex px-4 py-3 hover:bg-chat-hover-bg mt-1">
            <img
                className="h-8 rounded-full select-none cursor-pointer mr-3" draggable={false}
                src="https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=32" 
                alt="user profile picture" 
            />
            <div>
                {/* Message Info */}
                <div className="mb-1">
                    <span className="text-chat-username-color  cursor-pointer font-medium mr-2">
                        Some Username
                    </span>
                    <span className="text-chat-message-timestamp text-xs font-semibold space-x-2">
                        Jan 23, 2023 12:27 AM
                    </span>
                </div>
                {/* Message Content */}
                <div>
                    {props.imageUrl && <img src={`${props.imageUrl}`} className="w-auto h-auto max-w-[60%] mb-3 mt-2 cursor-pointer" alt="user sent image" />}
                    <p className="text-chat-message-color ">
                        {props.message}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Message;