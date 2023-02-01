import { useState } from "react";
import Sidebar from "./Sidebar";
import SidePanel from "./SidePanel/SidePanel";
import AppView from "./AppView/AppView";
import Modal from "../../components/Modal";
import CreateNewServer from "./CreateNewServer";
import CreateNewChannel from "./CreateNewChannel";

export type ModalDisplayTypes =  "NEW SERVER" | "NEW CHANNEL";

type ShowModalType = {
    show: boolean
    type: ModalDisplayTypes | ""
} 

const AppPage = () => {
    const [showModal, setShowModal] = useState<ShowModalType>({show: false, type: ""});
    
    const displayModal = (type: ModalDisplayTypes) => {
        setShowModal({
            show: true, 
            type
        })
    }

    const hideModal = () => {
        setShowModal({
            show: false, type: ""
        })
    }

    return (
        <>
            {showModal.show
                &&
                <Modal onClose={hideModal} heading={showModal.type === "NEW SERVER" ? "Create new server" : "Create new channel"}> 
                    {showModal.type === "NEW SERVER"
                        ? <CreateNewServer />
                        : <CreateNewChannel />
                    }
                </Modal>
            }

            <div className="w-full h-screen flex">

                <Sidebar createNewServer={displayModal} />

                <div className="w-full h-screen flex bg-background-primary">
                    <SidePanel createNewChannel={displayModal} />
                    <AppView />
                </div>
                
            </div>
        </>
    )
}

export default AppPage;