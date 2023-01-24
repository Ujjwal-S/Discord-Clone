import Sidebar from "./Sidebar";

const AppPage = () => {
    return (
        <div className="w-full h-screen flex">
            <Sidebar />
            <div className="w-full h-screen flex bg-background-primary">
                sidebar ke side wala
            </div>
        </div>
    )
}

export default AppPage;