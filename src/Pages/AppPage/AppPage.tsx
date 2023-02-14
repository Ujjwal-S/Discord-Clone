import { useState } from "react";
import Sidebar from "./Sidebar";
import SidePanel from "./SidePanel/SidePanel";
import AppView from "./AppView/AppView";
import CreateNewServer from "./components/CreateNewServer";
import CreateNewChannel from "./components/CreateNewChannel";


const AppPage = () => {
    const [showCreateNewServerModal, setShowCreateNewServerModal] = useState(false); 
    const [showCreateNewChannelModal, setShowCreateNewChannelModal] = useState(false);
    const hideModal = () => {
        if (showCreateNewServerModal) setShowCreateNewServerModal(false)
        if (showCreateNewChannelModal) setShowCreateNewChannelModal(false)
    }

    return (
        <>
            {showCreateNewServerModal && <CreateNewServer onClose={hideModal} />}
            {showCreateNewChannelModal && <CreateNewChannel onClose={hideModal} />}
            <div className="w-full h-screen flex">

                <Sidebar createNewServer={() => setShowCreateNewServerModal(true)} />

                <div className="w-full h-screen flex bg-background-primary">
                    <SidePanel createNewChannel={() => setShowCreateNewChannelModal(true)} />
                    <AppView />
                </div>
                
            </div>
        </>
    )
}

export default AppPage;