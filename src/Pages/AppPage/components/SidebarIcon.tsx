type SidebarIconProps = {
    children: React.ReactNode, 
    directMessages: boolean, 
    utilButton: boolean, 
    tooltipText: string,
    onClick?: () => void
}

const SidebarIcon = (props: SidebarIconProps) => {
    return (
        <div
            onClick={props.onClick}
            className={`sidebar-icon group ${props.directMessages ? 'bg-[#5865f2] rounded-2xl' : ''} ${props.utilButton ? 'bg-background-primary hover:bg-status-green' : ''}`}
        >
            {props.children}
            <span className="sidebar-tooltip group-hover:scale-100">
                {props.tooltipText}
            </span>
        </div>
    )
}

export default SidebarIcon;