import SidePanelDM from "./SidePanelDM";
import SidePanelChannel from "./SidePanelChannel";
import BottomControlPanel from "./BottomControlPanel";

const SidePanel = () => {
    return(
        <div className="h-screen min-w-[240px] max-w-[240px] bg-background-secondary flex flex-col">
            <div className="scrollable grow hover:overflow-y-auto hover:overflow-x-hidden overflow-hidden">
                <SidePanelChannel />
                <SidePanelChannel />
                <SidePanelChannel />
                <SidePanelChannel />
                <SidePanelChannel />
                <SidePanelDM />
                <SidePanelDM />
                <SidePanelDM />
                <SidePanelDM />
                <SidePanelDM />
                <SidePanelDM />
            </div>
            <BottomControlPanel />
        </div>
    )
}

export default SidePanel;