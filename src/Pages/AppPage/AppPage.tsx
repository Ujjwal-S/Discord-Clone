import Sidebar from "./Sidebar";
import SidePanel from "./SidePanel/SidePanel";
import AppView from "./AppView/AppView";

const AppPage = () => {
    return (
        <div className="w-full h-screen flex">
            <Sidebar />
            <div className="w-full h-screen flex bg-background-primary">
                <SidePanel />
                <AppView />
            </div>
        </div>
    )
}

export default AppPage;