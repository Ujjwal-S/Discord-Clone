import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import PageNotFound from "./Pages/PageNotFound";
import AppPage from "./Pages/AppPage/AppPage";
import { Toaster } from "react-hot-toast";
import LogoutToAccessRoute from "./utils/LogoutToAccessRoute";
import PrivateRoutes from "./utils/PrivateRoute";

const App = () => {
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