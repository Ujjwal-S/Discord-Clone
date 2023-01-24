import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import PageNotFound from "./Pages/PageNotFound";
import AppPage from "./Pages/AppPage/AppPage";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={ <LandingPage /> } />  Agar already login hai toh mat dikhan yeh */}
                <Route path="/" element={ <AppPage /> } />
                
                <Route path="/login" element={ <LoginPage /> } />

                <Route path="/register" element={ <RegisterPage /> } />
                
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        </Router>

    )
}

export default App;