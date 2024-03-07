import React, {useEffect, useState} from "react";
import {supabase} from "../helpers/supbaseClient";
import {Lot} from "../types";
import {Link, useLocation} from "react-router-dom";

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [res, setRes] = useState<Lot[] | []>([]);
    const location = useLocation();

    useEffect(() => {
        setRes([]);
        setQuery('');
    }, [location.pathname])

    function handleSearch(e: React.FormEvent<HTMLInputElement>) {
        setQuery(e.currentTarget.value);

        if (query.length <= 1) {
            setRes([])
        } else {
            supabase.from('lots')
                .select('*')
                .range(0, 7)
                .order('created_at', {ascending: true})
                .ilike('title', `%${query}%`).then(r => setRes(r.data as Lot[]))
        }
    }

    return (
        <div className="relative w-full max-w-[700px]">
            <div>
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input value={query} onChange={handleSearch} type="text" id="default-search"
                           className="block w-full p-2 pl-10 text-sm text-gray-900 border !border-gray-300 rounded-full bg-gray-50 focus:ring-0 focus:bg-white transition-all focus:drop-shadow-lg"
                           placeholder="Search by title"
                           autoComplete="off"
                    />
                </div>
            </div>
            {res.length > 0 &&
                <div
                    className="absolute left-0 bg-white top-full mt-3 w-[calc(100%+3rem)] drop-shadow-lg rounded-xl z-50 overflow-hidden">
                    <ul className="divide-y divide-gray-200 overflow-hidden">
                        {res.map((lot: Lot) => (
                            <li key={lot.id}>
                                <Link to={`/lot/${lot.id}`}
                                      className="flex items-center space-x-3 p-3 hover:bg-gray-100">
                                    <img
                                        src={lot.image}
                                        width="35" alt={lot.title}/>
                                    <span className="text-sm font-semibold">{lot.title}</span>
                                    <span>(#{lot.lot_number})</span>
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            }
        </div>
    )
}