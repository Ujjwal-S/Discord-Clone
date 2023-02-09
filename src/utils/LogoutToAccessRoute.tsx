import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const LogoutToAccessRoute = () => {
    const user = useAppSelector(state => state.userAuth.user);

    return user ? <Navigate to="/app" /> : <Outlet />
}

export default LogoutToAccessRoute;