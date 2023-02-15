import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import PageNotFound from "./Pages/PageNotFound";
import AppPage from "./Pages/AppPage/AppPage";
import LogoutToAccessRoute from "./utils/LogoutToAccessRoute";
import PrivateRoutes from "./utils/PrivateRoute";
import loadingIcon from "./assets/images/loading.svg"
import { Toaster } from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { updateUser } from "./store/authSlice";


const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            let userInfo = null;
            if (user) {
                userInfo = {
                    uid: user.uid,
                    email: user.email as string,
                    photoURL: user.photoURL as string
                }
            }
            dispatch(
                updateUser(userInfo)
            )
        })

        return () => unsub()
    }, [])

    const {loading, loginOrRegisterMethod} = useAppSelector(state => state.userAuth);
    if (loading && loginOrRegisterMethod === null) {
        return (
            <div className="w-screen h-screen flex justify-center items-center bg-[rgb(54,57,63)]">
                <img 
                    src={loadingIcon} 
                    className="animate-[spin_5s_linear_infinite] relative bottom-20" 
                    alt="Loading.." 
                />
            </div>
        )
    }
    
    return (
        <React.Fragment>
            <div>
                <Toaster />
            </div>
            <Router>
                <Routes>
                    <Route path="/" element={ <LandingPage /> }/>
                    
                    <Route element={ <LogoutToAccessRoute />} >
                        <Route path="/login" element={ <LoginPage /> } />
                        <Route path="/register" element={ <RegisterPage /> } />
                    </Route>

                    
                    <Route element={ <PrivateRoutes />} >
                        <Route path="/app" element={ <AppPage /> } />
                    </Route>

                    <Route path="*" element={ <PageNotFound /> } />
                </Routes>
            </Router>
        </React.Fragment>

    )
}

export default App;