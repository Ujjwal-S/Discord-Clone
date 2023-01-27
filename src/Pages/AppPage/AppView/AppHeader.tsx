import {useState, useRef, useEffect, useCallback} from "react";
import atTheRateIconUrl from "../../../assets/images/appPage/@.svg";
import onlineStatusIconUrl from "../../../assets/images/appPage/online_status.svg";
import searchIconUrl from "../../../assets/images/appPage/search_icon.svg"
import hashtagIconUrl from "../../../assets/images/appPage/hashtag.svg";


const AppHeader = (props: {directMessage: boolean, smallerScreen: boolean}) => {
    const ref = useRef<HTMLInputElement>(null)
    

    useEffect(() => {
        function clickOutsideHandler(e:any) {
            if (ref.current && !ref.current.contains(e.target)) {
                ref.current.classList.remove("twice-width-search-box")
            }
        }
        document.addEventListener("mousedown", clickOutsideHandler);
        return (() => {
            document.removeEventListener("mousedown", clickOutsideHandler);
        })
    }, [ref])

    function handleOnClick() {
        if (ref.current) {
            ref.current.classList.add("twice-width-search-box");
        }
    }

    return (
        <header className="min-h-[48px] px-2 flex justify-between items-center border-b border-b-background-tertiary">
            
            <div className={`flex items-center ${props.smallerScreen ? 'hidden' : ''}`}>
                {props.directMessage
                    ?
                        <img src={atTheRateIconUrl} className="h-6 mx-2 inline-block select-none" draggable="false" alt="at" />
                    :
                        <img src={hashtagIconUrl} className="h-6 mx-2 inline-block select-none" draggable="false" alt="hashtag" />
                }
                <span className="mr-2 text-interactive-hover font-semibold">Ujjwal_S</span>
                <img src={onlineStatusIconUrl} className="inline-block mr-2 select-none cursor-pointer" draggable="false" alt="status" />
            </div>


            <div className="flex items-center">
                
                <div className="inline-block mr-2 h-6 mx-2 select-none cursor-pointer text-app-icon-inactive hover:text-interactive-hover">
                    <svg x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11 5V3C16.515 3 21 7.486 21 13H19C19 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z">
                        </path>
                    </svg>   
                </div>

                <div className="inline-block mr-2 h-6 mx-2 select-none cursor-pointer text-app-icon-inactive hover:text-interactive-hover">
                    <svg x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z">
                        </path>
                    </svg>
                </div>

                <div className="inline-block mr-2 h-6 mx-2 select-none cursor-pointer text-app-icon-inactive hover:text-interactive-hover">
                    <svg x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z">
                        </path>
                    </svg>   
                </div>

                <div className="inline-block mr-2 h-6 mx-2 select-none cursor-pointer text-app-icon-inactive hover:text-interactive-hover">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"></path>
                    </svg>  
                </div>

                <div className="inline-block mr-2 h-6 mx-2 select-none cursor-pointer text-app-icon-inactive hover:text-interactive-hover">
                    <svg x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z" fill="currentColor">
                            </path>
                            <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" fill="currentColor">
                            </path>
                        </g>
                    </svg>
                </div>

                <div className="relative mx-2">
                    <input ref={ref} onClick={handleOnClick} className="transition-all w-36 bg-app-header-dark text-white rounded-[4px] py-1 px-2 text-sm leading-4 font-semibold tracking-wide outline-none border-none" type="text" name="search_box_chat" id="search_box_chat" placeholder="Search" />
                    <img className="h-4 absolute right-1 top-1" src={searchIconUrl} alt="search icon" />
                </div>

                <div className="inline-block mr-2 h-6 mx-2 select-none cursor-pointer text-app-icon-inactive hover:text-interactive-hover">
                    <svg x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor">
                        </path>
                    </svg>
                </div>

                <div className="inline-block mr-2 h-6 mx-2 select-none cursor-pointer text-app-icon-inactive hover:text-interactive-hover">
                    <svg x="0" y="0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z">
                        </path>
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;