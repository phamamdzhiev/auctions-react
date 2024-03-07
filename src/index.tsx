import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter as R, Route, Routes} from "react-router-dom";
import App from "./App";
import {lazy, Suspense} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {store} from "./store/store";
import {Provider} from 'react-redux'
import ProtectedRoutes from "./components/ProtectedRoutes";
import GuestRoutes from "./components/GuestRoutes";

const AboutUs = lazy(() => import("./pages/about/AboutUs"));
const Login = lazy(() => import("./pages/auth/Login"));
const LotShow = lazy(() => import("./pages/lot/Show"));

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <R>
        <div>
            <Provider store={store}>
                <Header/>
                <Suspense fallback={<div className="mt-5 text-center font-semibold text-main">Loading..</div>}>
                    <Routes>
                        <Route index path="/" element={<App/>}/>
                        <Route path="/about-us" element={<AboutUs/>}/>
                        <Route path="/lot/:id" element={<LotShow/>}/>
                        <Route element={<GuestRoutes/>}>
                            <Route path="/login" element={<Login/>}/>
                        </Route>
                        <Route element={<ProtectedRoutes/>}>

                        </Route>
                    </Routes>
                </Suspense>
                <Footer/>
            </Provider>
        </div>
    </R>
);
