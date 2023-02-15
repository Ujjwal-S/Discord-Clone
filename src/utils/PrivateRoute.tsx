import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { updateUser } from "../store/authSlice";
import loadingIcon from "../../src/assets/images/loading.svg"

const PrivateRoutes = () => {
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

    const {user, loading} = useAppSelector(state => state.userAuth);

    if (loading) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <img src={loadingIcon} className="animate-[spin_5s_linear_infinite] relative bottom-20" alt="Loading.." />
            </div>
        )
    }

    return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes;