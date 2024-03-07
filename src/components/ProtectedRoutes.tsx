import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

export default function ProtectedRoutes() {
    const auth = useSelector((state: RootState) => state.auth);

    if (!auth.user) {
        return <Navigate to="/login?requiresAuth=true"/>
    }

    return <Outlet/>
}