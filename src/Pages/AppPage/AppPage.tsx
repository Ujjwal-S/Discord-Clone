import Sidebar from "./Sidebar";
import SidePanel from "./SidePanel";

const AppPage = () => {
    return (
        <div className="w-full h-screen flex">
            <Sidebar />
            <div className="w-full h-screen flex bg-background-primary">
                <SidePanel />
            </div>
        </div>
    )
}

export default AppPage;