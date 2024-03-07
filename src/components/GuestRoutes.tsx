import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

export default function GuestRoutes() {
    const auth = useSelector((state: RootState) => state.auth);
    if (auth.user) return <Navigate to="/"/>
    return <Outlet/>
}