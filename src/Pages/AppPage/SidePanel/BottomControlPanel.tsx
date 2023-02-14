const BottomControlPanel = () => {
    return(
        <div className="bg-background-secondary-alt min-h-[52px] flex justify-between items-center px-2 shadow-blur-on-top">
            {/* Avatar Wrapper */}
            <div className="flex items-center select-none rounded cursor-pointer hover:bg-background-modifier-hover min-w-[120px]">
                <div className="avatar">
                    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                        <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                            <img className="rounded-full select-none" draggable="false" src="https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=32" alt=" " aria-hidden="true" />
                        </foreignObject>
                        <circle cx="27" cy="27" r="6" stroke="#2f3136" strokeWidth="3" fill="#00A55D" />
                    </svg>
                </div>
                <div className="py-1 pl-2 text-sm font-semibold leading-4 text-interactive-hover">
                    <p className="whitespace-nowrap overflow-ellipsis overflow-hidden">Ujjwal_S</p>
                    <p>#1234</p>
                </div>
            </div>

            {/* Controls */}
            <div className="text-[color:var(--text-gray)]">
                {/* Mic Icon */}
                <button className="w-8 h-8 hover:bg-background-modifier-hover rounded">
                    <svg className="mx-auto" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" fill="currentColor">
                        </path>
                        <path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="currentColor">
                        </path>
                        <path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="currentColor">
                        </path>
                        <path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" fill="#ED4245">
                        </path>
                    </svg>
                </button>
                {/* Audio */}
                <button className="w-8 h-8 hover:bg-background-modifier-hover rounded">
                    <svg className="mx-auto"  aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="currentColor">
                            </path>
                        </svg>
                    </svg>
                </button>
                {/* Settings */}
                <button className="w-8 h-8 hover:bg-background-modifier-hover rounded">
                    <svg className="mx-auto"  aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default BottomControlPanel;