import {Lot} from "../types";
import {Link} from "react-router-dom";
import {currencyFormat} from "../helpers/utils";

interface Props {
    lot: Lot
}

export default function LotSingleton({lot}: Props) {
    return (
        <div className="relative bg-white shadow-md hover:shadow overflow-hidden rounded-xl">
            <div className="absolute top-5 right-5 p-2 rounded-full bg-main-accent/70 text-white z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth="1.5" stroke="currentColor"
                     className="w-5 h-5">
                    <path strokeLinecap="round"
                          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
                </svg>
            </div>

            <Link className="block bg-black" to={`/lot/${lot.id}`}>
                <div className="border-b border-gray-200 w-full h-0 pt-[100%] relative">
                    <img className="absolute top-0 left-0 w-full h-full object-contain object-center"
                         src={lot.image}
                         alt={lot.title}/>
                </div>
            </Link>
            <div className="p-3 space-y-2">
                <div>
                    <strong className="text-sm font-normal text-gray-500">
                        #{lot.lot_number} | e-Auction 2
                    </strong>
                </div>
                <div>
                    <Link to={`/lot/${lot.id}`}>
                        <h1 className="font-bold text-sm uppercase truncate">
                            {lot.title}
                        </h1>
                    </Link>
                </div>
                <div className="truncate text-sm font-normal">
                    {lot.description}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">Current bid</span><strong
                    className="font-semibold">{currencyFormat(lot.current_bid)}</strong>
                </div>
                <hr/>
                <div className="grid grid-cols-2 gap-1.5 mt-2">
                    <Link className="basis-1/2 btn-main flex justify-center items-center space-x-1 rounded-md text-sm"
                          to={`/lot/${lot.id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Bid Now</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}