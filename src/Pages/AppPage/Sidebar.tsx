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
                <svg aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
                    <path fill="white" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z">
                    </path>
                </svg>
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