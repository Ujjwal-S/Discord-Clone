import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const PrivateRoutes = () => {
    const user = useAppSelector(state => state.userAuth.user);
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes;