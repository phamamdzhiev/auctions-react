import React from 'react';
import LotSingleton from "./components/LotSingleton";
import {ErrorBoundary} from "react-error-boundary";
import {useFetchLots} from "./hooks/useFetchLots";
import {Lot} from "./types";
import {useSearchParams} from "react-router-dom";

export enum Ordering {
    Default = 'default',
    Ascending = 'ascending',
    Descending = 'descending'
}

export default function App() {
    const [params, setParams] = useSearchParams();
    const {lots, setLots} = useFetchLots(params.get('ordering'));

    function applySort(event: React.FormEvent<HTMLSelectElement>) {
        switch (event.currentTarget.value) {
            case Ordering.Descending:
                setLots([...lots].sort((a: Lot, b: Lot) => b.current_bid - a.current_bid));
                setParams({'ordering': Ordering.Descending})
                break;
            case Ordering.Ascending:
            case Ordering.Default:
                setLots([...lots].sort((a: Lot, b: Lot) => a.current_bid - b.current_bid));
                setParams({})
                break;
        }
    }

    return (
        <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
            <div className="container">
                <div className="my-3">
                    <label htmlFor="ordering" className="block text-xs font-semibold mb-1">Sort by:</label>
                    <select onChange={applySort} name="ordering"
                            defaultValue={params.get('ordering') || Ordering.Default}
                            className="text-sm rounded-lg py-1 pl-3 pr-6">
                        <option value={Ordering.Default}>Default</option>
                        <option value={Ordering.Ascending}>Price Ascending</option>
                        <option value={Ordering.Descending}>Price Descending</option>
                    </select>
                </div>
                <div className="lot-grid my-10">
                    {lots.map((item, i) => <LotSingleton lot={item} key={i}/>)}
                </div>
            </div>
        </ErrorBoundary>
    );
}
