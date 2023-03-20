import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { useAppSelector } from "../../../store/hooks";
import SidePanelChannel from "./SidePanelChannel";


const SidePanelChannels = () => {
    const [channels, setChannels] = useState<{channelName: string, channelUid: string}[]>([]);
    const [loading, setLoading] = useState(true);
    const activeServer = useAppSelector(state => state.appState.activeServer)
    const [activeServerId, setActiveServerId] = useState("");

    useEffect(() => {
        let unsub:Function|null = null;

        if (activeServer !== "directMessages" && activeServerId !== activeServer.serverId){
            setActiveServerId(activeServer.serverId)
            setLoading(true);
            console.log("MAi chala")
            const ref = collection(db, `servers/${activeServer.serverId}/channels/`)
            const q = query(ref, orderBy("channelName"))
            unsub = onSnapshot(q, (querySnapshot) => {
                let arr:{channelName: string, channelUid: string}[] = [];
                querySnapshot.docs.forEach(channel => {
                    arr.push({
                        channelName: channel.data().channelName,
                        channelUid: channel.id
                    })
                })
                if (arr.length > 0) {
                    setChannels(arr);
                }
                setLoading(false);
            })
        }
        return () => {
            unsub && unsub();
        }
    }, [activeServer])

    return (
        <>
            <div className={loading ? 'opacity-10' : ''}>
                {channels.map(channel => {
                    return <SidePanelChannel 
                        channelName={channel.channelName} channelUid={channel.channelUid} key={channel.channelUid} 
                    />
                })}
            </div>
        </>
    )
}

export default SidePanelChannels;