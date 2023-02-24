import SidePanelDMs from "./SidePanelDMs";
import SidePanelChannel from "./SidePanelChannel";
import BottomControlPanel from "./BottomControlPanel";
import SidePanelHeader from "./SidePanelHeader";
import { useAppSelector } from "../../../store/hooks";

const SidePanel = (props: {createNewChannel: () => void}) => {
    const activeScreen = useAppSelector(state => state.appState.activeScreen)

    return(
        <nav className="h-screen min-w-[240px] max-w-[240px] bg-background-secondary flex flex-col">
            <SidePanelHeader createNewChannel={props.createNewChannel} />
            <ul className="scrollable grow hover:overflow-y-auto hover:overflow-x-hidden overflow-hidden border-t border-t-background-tertiary">
                {activeScreen === "directMessages"
                    ?   <SidePanelDMs />
                    :   <SidePanelChannel />
                }
            </ul>
            <BottomControlPanel />
        </nav>
    )
}

export default SidePanel;