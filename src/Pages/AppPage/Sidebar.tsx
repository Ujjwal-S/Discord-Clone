import directMessagesDiscordLogo from "../../assets/images/appPage/direct_messages_discord_logo.svg";

const SidebarIcon = (props: {children: React.ReactNode, directMessages: boolean, utilButton: boolean, tooltipText: string}) => {
    return (
        <div className={`sidebar-icon group ${props.directMessages ? 'bg-[#5865f2] rounded-2xl' : ''} ${props.utilButton ? 'bg-background-primary hover:bg-status-green' : ''}`}>
            {props.children}
            <span className="sidebar-tooltip group-hover:scale-100">
                {props.tooltipText}
            </span>
        </div>
    )
}

const Sidebar = () => {
    return (
        <nav className="bg-background-tertiary min-w-[72px]">
            {/* Direct Messages */}
            <SidebarIcon directMessages={true} utilButton={false} tooltipText="Direct Messages">
                <img src={directMessagesDiscordLogo} alt="direct messages" />
            </SidebarIcon>
            
            <div className="h-[2px] w-8 rounded-sm bg-[#4f545c7a] mx-auto">
            </div>

            <SidebarIcon directMessages={false} utilButton={false} tooltipText="Fireship">
                <img className="select-none" src="https://cdn.discordapp.com/icons/1015095797689360444/af578001e4a166fd6181c3757b71ff39.webp?size=96" alt="Fireship" draggable="false"  />
            </SidebarIcon>
            <SidebarIcon directMessages={false} utilButton={false} tooltipText="Scalar">
                <img className="select-none" src="https://cdn.discordapp.com/icons/780066247601291285/a_298ffe3954da9da947bd636b15ca3b53.webp?size=96" alt="Scalar" draggable="false" />
            </SidebarIcon>


            {/* Util Buttons */}
            <SidebarIcon directMessages={false} utilButton={true} tooltipText="Add a Server">
                <svg className="text-status-green group-hover:text-white" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z">
                    </path>
                </svg>
            </SidebarIcon>
            <SidebarIcon directMessages={false} utilButton={true} tooltipText="Explore Public Servers">
                <svg className="text-status-green group-hover:text-white" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z">
                    </path>
                </svg>
            </SidebarIcon>

            <div className="h-[2px] w-8 rounded-sm bg-[#4f545c7a] mx-auto">
            </div>

            <SidebarIcon directMessages={false} utilButton={true} tooltipText="Download Discord App">
                <svg className="text-status-green group-hover:text-white" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z">
                    </path>
                </svg>
            </SidebarIcon>

        </nav>
    )
}

export default Sidebar;