export default function Footer() {
    return (
        <footer className="py-6 mt-16 bg-main text-white">
            <div className="container">
                <div className="flex flex-col xl:flex-row pb-6">
                    <div className="xl:basis-1/4">
                        <img width="120" src="https://numisarena.com/static/ARENA_NUMIS_SQURE.jpg"
                             alt="logo"
                        />
                    </div>
                    <div className="xl:basis-3/4 grid xl:grid-cols-3 gap-6">
                        <ul className="text-sm space-y-2">
                            <li className="font-semibold mb-3">Contacts</li>
                            <li className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                                </svg>

                                {/*<span>{{config('app.owner_name')}}</span>*/}
                            </li>
                            <li className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                </svg>

                                {/*<span>{{config('mail.from.address')}}</span>*/}
                            </li>
                        </ul>
                        <ul className="text-sm space-y-2">
                            <li className="font-semibold mb-3">About Company</li>
                            <li className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/>
                                </svg>

                                {/*<span>{{config('app.company_name')}}</span>*/}
                            </li>
                            <li className="">
                        <span className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"/>
                            </svg>
                            {process.env.REACT_APP_BANK_NAME}
                        </span>
                                <div className="flex flex-col ml-7 mt-0.5">
                                    {/*<span className="">IBAN - {{config('app.iban')}}</span>*/}
                                    {/*<span className="">BIC - {{config('app.bic')}}</span>*/}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-5 border-y border-main-accent text-center space-y-3">
                    <div>
                        <h3 className="font-light mb-4">Part of Numis Bulgaria Ltd.</h3>
                        <ul className="grid grid-cols-1 gap-3 justify-center items-center max-w-sm mx-auto">
                            <li><a target="_blank" rel="noopener noreferrer" href="https://numis-bg.com">
                                <img width="83" className="mx-auto" src="https://numisarena.com/static/logo-white.png"
                                     alt="Numis Bulgaria"/></a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">AUTHORIZED DEALER OF</h3>
                        <ul className="grid grid-cols-3 gap-3 justify-center items-center max-w-sm mx-auto">
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.pcgs.com/"><img
                                width="83" className="mx-auto" src="https://numisarena.com/static/pcgs-logo.png" alt="PCGS"/></a>
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.ngccoin.com/"><img
                                width="100" className="mx-auto" src="https://numisarena.com/static/ngc-logo.png" alt="NGC"/></a>
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.pmgnotes.com/"><img
                                width="100" className="mx-auto" src="https://numisarena.com/static/pmg-logo.png" alt="PMG"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-xs pt-6">&copy; {new Date().getFullYear()} {process.env.REACT_APP_NAME}. All rights
                    reserved.
                </div>
            </div>
        </footer>
    )
}