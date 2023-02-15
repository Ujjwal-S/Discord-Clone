import { useState, useEffect, useCallback } from "react";
import AppHeader from "./AppHeader";
import Message from "./Message";
import SmallScreenSizeWarning from "./SmallScreenSizeWarning";
import UserInput from "./UserInput";
import WumpusImage from "../../../assets/images/appPage/wumpus.svg"

const debouce = (callback: Function, delay: number): Function => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return (...args:any) => {
        if (timer) clearTimeout(timer);
        // Keep a reference to the context of this function, because remember setTimeout
        // creates its own execution context, therefore the callback function would then
        // be called for setTimeouts context rather than this function's context.
        let context = this;

        timer = setTimeout(() => {
            callback.apply(context, args)
        }, delay)
    }
}


const AppView = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const resizeHandler = useCallback(
        debouce(() => {
            setScreenSize(window.innerWidth);
        }, 200), 
        []
    )

    useEffect(() => {
        // @ts-ignore
        window.addEventListener("resize", resizeHandler);
        return () => {
            // @ts-ignore
            window.removeEventListener("resize", resizeHandler)
        }
    }, [])


    return (
        <div className="w-full h-full overflow-y-auto flex flex-col">
            {(screenSize < 780) && <SmallScreenSizeWarning />}
            <AppHeader directMessage={true} screenSize={screenSize}/>
            {/* <div className="grow overflow-auto scrollable"> */}
                {/* Render Message here */}
            {/* </div> */}
            <div className="grow mx-4 flex justify-center items-center">
                <img src={WumpusImage} className="select-none relative bottom-4" draggable={false} alt="Wumpus" />
            </div>
            <UserInput screenSize={screenSize} />
        </div>
    )
}

export default AppView;