const SidePanelDM = () => {
    return(
        <li className="group mt-2 flex items-center ml-2 max-w-[224px] min-w-[224px] py-[5px] px-2 rounded cursor-pointer hover:bg-background-modifier-hover">
            <div className="avatar h-8 w-8 mr-3">
                {/* Iski jagha google account se auth user ki account picture lagana */}
                <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                    <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                        <img className="rounded-full select-none" draggable="false" src="https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=32" alt=" " aria-hidden="true" />
                    </foreignObject>
                    <circle cx="27" cy="27" r="6" stroke="#2f3136" strokeWidth="3" fill="#00A55D" />
                </svg>
            </div>
            <div className="userInfo whitespace-nowrap overflow-ellipsis overflow-hidden">
                {/* Username */}
                <p className="group-hover:text-interactive-hover text-sidepanel-text-color leading-5 font-semibold select-none">
                    Ujjwal Saxena
                </p>
                {/* Latest Message */}
                <p className="group-hover:text-interactive-hover text-sidepanel-text-color text-xs text-ellipsis overflow-hidden">
                    Namste ! Namste ! Namste ! Namste ! Namste ! Namste !
                </p>
            </div>
        </li>
    )
}

export default SidePanelDM;