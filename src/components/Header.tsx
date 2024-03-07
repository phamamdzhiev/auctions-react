import SearchBar from "./SearchBar";
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store/store";
import {useEffect} from "react";
import {supabase} from "../helpers/supbaseClient";
import {setUser} from "../store/AuthSlice";

export default function Header() {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    async function logOut() {
        const {error} = await supabase.auth.signOut();
        if (!error) dispatch(setUser(null));
    }

    useEffect(() => {
        async function hasAuth() {
            const {data} = await supabase.auth.getUser();
            dispatch(setUser(data.user))
        }

        hasAuth();
    }, []);

    return (
        <header className="relative z-30">
            <div className="container px-2 md:px-5">
                <div className="flex justify-between items-center space-x-3 md:space-x-16">
                    <div>
                        <Link to="/" className="block text-center font-semibold text-xl py-4">
                            <img className="w-[130px] md:w-[120px]"
                                 src="https://numisarena.com/static/ARENA_NUMIS_SQURE.jpg"
                                 alt="logo"
                            />
                        </Link>
                    </div>
                    <SearchBar/>
                    <ul className="flex items-center space-x-3">
                        {!auth.user &&
                            <>
                                <li className="whitespace-nowrap">
                                    <Link className="btn-main flex items-center space-x-1" to="/login">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5"
                                             stroke="currentColor" className="w-5 md:w-6 md:h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                                        </svg>
                                        <span className="text-sm md:text-base">Login</span>
                                    </Link>
                                </li>
                            </>
                        }
                        {auth.user && <>
                            <div className="leading-tight">
                                <p>Hello,</p>
                                <p className="font-semibold">{auth.user.email}</p>
                                <button onClick={logOut} type="submit" className="mt-1 text-red-500 hover:underline">
                                    Sign out
                                </button>
                            </div>
                        </>}
                    </ul>
                </div>
            </div>
            <div className="bg-main text-white flex items-center space-x-12">
                <div className="container flex items-center justify-between">
                    <ul className="hidden xl:flex items-center space-x-6">
                        <li>
                            <Link
                                className="relative inline-block px-2 py-4 hover:bg-main-accent"
                                to="/">Home</Link>
                        </li>
                        <li>
                            <NavLink className="relative inline-block px-2 py-4 hover:bg-main-accent"
                                     to="/about-us">About us</NavLink>
                        </li>
                    </ul>
                    <div className="flex xl:hidden">
                        <button
                            type="button" data-drawer-target="drawer-mobile-navigation"
                            data-drawer-show="drawer-mobile-navigation" aria-controls="drawer-mobile-navigation"
                            className="flex items-center space-x-1 py-4 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                            <span>Menu</span>
                        </button>
                    </div>
                </div>

            </div>
        </header>

    )
}