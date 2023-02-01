import { useState } from "react";
import Sidebar from "./Sidebar";
import SidePanel from "./SidePanel/SidePanel";
import AppView from "./AppView/AppView";
import Modal from "../../components/Modal";
import CreateNewServer from "./CreateNewServer";

const AppPage = () => {
    const [displayNewServerModal, setDisplayNewServerModal] = useState(false);

    const showNewServerModal = () => {
        setDisplayNewServerModal(true)
    }
    const hideNewServerModal = () => {
        console.log("Heelo")
        setDisplayNewServerModal(false)
    }

    return (
        <div className="w-full h-screen flex">
            {   displayNewServerModal
                &&
                <Modal heading="Create New Server" onClose={hideNewServerModal}>
                    <CreateNewServer />
                </Modal>
            }
            <Sidebar showNewServerModal={showNewServerModal} />
            <div className="w-full h-screen flex bg-background-primary">
                <SidePanel />
                <AppView />
            </div>
        </div>
    )
}

export default AppPage;