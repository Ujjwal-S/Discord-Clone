import SidePanelDM from "./SidePanelDM";
import SidePanelChannel from "./SidePanelChannel";
import BottomControlPanel from "./BottomControlPanel";

const SidePanel = (props: {createNewChannel: () => void}) => {
    return(
        <nav className="h-screen min-w-[240px] max-w-[240px] bg-background-secondary flex flex-col">
            {/* Server Header */}
            <div className="min-h-[48px] px-4 pt-1 select-none flex justify-between items-center border-b border-b-background-tertiary text-interactive-hover">
                <h3 className="font-semibold">
                    Server Name
                </h3>
                <button className="text-2xl group relative" onClick={props.createNewChannel}>
                    +
                    <span className="tooltip-bottom group-hover:scale-100">
                        Create new Channel in Server
                    </span>
                </button>
            </div>

            <ul className="scrollable grow hover:overflow-y-auto hover:overflow-x-hidden overflow-hidden">
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
            </ul>
            <BottomControlPanel />
        </nav>
    )
}

export default SidePanel;