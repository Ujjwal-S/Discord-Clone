import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import directMessagesDiscordLogo from "../../assets/images/appPage/direct_messages_discord_logo.svg";
import { db } from "../../firebase/firebase";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { updateServersList } from "../../store/serversSlice";
import { updateAppState } from "../../store/appSlice";
import { ServerChat } from "../../store/types";
import sendToast from "../../utils/sendToast";
import SidebarIcon from "./components/SidebarIcon";

const Sidebar = (props: {createNewServer: () => void}) => {
    const me = useAppSelector(state => state.userAuth.user)
    const servers = useAppSelector(state => state.serversJoined.servers)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!me) return;
        let unsub:any = null;

        (async () => {
            const ref = doc(db, "serversJoined", me.uid)
            try {
                unsub = onSnapshot(ref, (querySnapshot) => {
                    let arr:ServerChat[] = [];
                    querySnapshot.data()?.servers.forEach((server:any) => {
                        arr.push({
                            serverId: server.serverId,
                            serverName: server.serverName,
                            serverPhotoURL: server.serverPhotoURL,
                            channelId: null,
                            channelName: null,
                        })
                    })
                    if (arr.length > 0) dispatch(updateServersList(arr))
                })
            }catch (e) {
                sendToast("error", "Failed to load your servers :(")
            }
        })() 

        return () => {
            unsub && unsub()
        }
    }, [])

    const serverIconClickHandler = (serverId:string, serverName:string, serverPhotoURL:string) => {
        dispatch(updateAppState({
            activeScreen: "server",
            activeChat: null,
            activeServer: {
                serverId,
                serverName,
                serverPhotoURL,
                channelId:null,
                channelName: null
            }
        }))
    }
    const openDMs = () => {
        dispatch(updateAppState({
            activeScreen: "directMessages",
            activeServer: "directMessages",
            activeChat: null
        }))
    }

    return (
        <nav className="bg-background-tertiary min-w-[72px]">
            {/* Direct Messages */}
            <SidebarIcon onClick={openDMs} directMessages={true} utilButton={false} tooltipText="Direct Messages">
                <img src={directMessagesDiscordLogo} draggable={false} className="select-none" alt="direct messages" />
            </SidebarIcon>
            
            <div className="h-[2px] w-8 rounded-sm bg-[#4f545c7a] mx-auto"></div>

            {/* Servers */}
            {servers.map(server => {
                return (
                <SidebarIcon 
                    onClick={() => serverIconClickHandler(server.serverId, server.serverName, server.serverPhotoURL)} 
                    directMessages={false} utilButton={false} 
                    tooltipText={server.serverName} key={server.serverId}
                >
                    <img src={server.serverPhotoURL} alt={server.serverName} />
                </SidebarIcon>)
            })}

            {/* Util Buttons */}
            <SidebarIcon onClick={props.createNewServer} directMessages={false} utilButton={true} tooltipText="Add a Server">
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

            <div className="h-[2px] w-8 rounded-sm bg-[#4f545c7a] mx-auto"></div>

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