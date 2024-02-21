import SearchBar from "./SearchBar";
import {Link, NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className="relative z-30">
            <div className="container px-2 md:px-5">
                <div className="flex justify-between items-center space-x-3 md:space-x-16">
                    <div>
                        <Link to="/" className="block text-center font-semibold text-xl py-4">
                            <img className="w-[130px] md:w-[120px]"
                                 src="https://numisarena.com/static/ARENA_NUMIS_SQURE.jpg"
                                 alt="logo"/>
                        </Link>
                    </div>
                    <SearchBar/>
                    <ul className="flex items-center space-x-3">
                        <li className="whitespace-nowrap">
                            <a className="flex items-center space-x-1" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-5 w-5 md:w-6 md:h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                                </svg>
                                <span className="text-sm md:text-base">Login</span>
                            </a>
                        </li>
                        <li className="hidden xl:inline-block">
                            <a className="btn-main flex items-center space-x-1" href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-main text-white flex items-center space-x-12">
                <div className="container flex items-center justify-between">
                    <ul className="hidden xl:flex items-center space-x-6">
                        <li>
                            <a className="relative inline-block px-2 py-4 hover:bg-main-accent @if(\Illuminate\Support\Facades\Route::currentRouteName() === 'auction.show') bg-main-accent  @endif"
                               href="{{route('homepage')}}">Active auction</a>
                        </li>
                        <li className="hidden">
                            <button id="dropdownHoverButtonDt" data-dropdown-toggle="dropdownHoverDt"
                                    data-dropdown-trigger="click"
                                    className="flex items-center px-2 py-4 hover:bg-main-accent" type="button">
                                Categories
                                <svg className="w-2 h-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <div id="dropdownHoverDt"
                                 className="z-10 hidden bg-main-accent rounded-lg shadow w-44">
                                <ul className="py-2 text-sm text-white" aria-labelledby="dropdownHoverButtonDt">
                                    <li>
                                        <a href="{{ route('lot.category', ['name' => 'coins']) }}"
                                           className="block px-4 py-2 hover:bg-main">Coins</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('lot.category', ['name' => 'banknotes']) }}"
                                           className="block px-4 py-2 hover:bg-main">Banknotes</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('lot.category', ['name' => 'ordens and medals']) }}"
                                           className="block px-4 py-2 hover:bg-main">Ordens And Medals</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink className="relative inline-block px-2 py-4 hover:bg-main-accent"
                               to="/about-us">About us</NavLink>
                        </li>
                        <li>
                            <a className="relative inline-block px-2 py-4 hover:bg-main-accent"
                               href="{{route('static.delivery')}}">Delivery</a>
                        </li>
                        <li>
                            <a className="relative inline-block px-2 py-4 hover:bg-main-accent"
                               href="{{ route('static.terms') }}">Terms & Conditions</a>
                        </li>
                        <li>
                            <a className="relative inline-flex items-center space-x-2 px-2 py-4 hover:bg-main-accent"
                               target="_blank"
                               href="https://numis-bg.com">
                                <span>Shop</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="flex xl:hidden">
                        <button
                            type="button" data-drawer-target="drawer-mobile-navigation"
                            data-drawer-show="drawer-mobile-navigation" aria-controls="drawer-mobile-navigation"
                            className="flex items-center space-x-1 py-4 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
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