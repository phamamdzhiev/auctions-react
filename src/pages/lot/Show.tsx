import React, {useEffect, useState} from "react";
import {Lot} from "../../types";
import {supabase} from "../../helpers/supbaseClient";
import {redirect, useParams} from "react-router-dom";
import BidForm from "../../components/BidForm";
import Loading from "../../components/Loading";

export default function Show() {
    const [lot, setLot] = useState<Lot | null>(null)
    const params = useParams();

    useEffect(() => {
        async function fetchLot() {
            const {data} = await supabase
                .from('lots')
                .select("*")
                .eq('id', params.id)
                .single();

            if (!data) redirect('/')
            setLot(data);
        }

        fetchLot();
    }, [params.id]);

    if (!lot) {
        return <Loading/>
    }

    return (<section className="container">
            <button
                type="button"
                onClick={() => window.history.back()}
                title="Return back to auction lots"
                className="appearance-none inline-flex space-x-1 mb-3 text-sm text-main-accent"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor"
                     className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                </svg>
                <span>Back</span>
            </button>
            <div className="card flex gap-3 lg:flex-row flex-col">
                <LotImages image={lot.image} title={lot.title}/>
                <div className="basis-1/3">
                    <div className="flex items-center justify-between text-gray-800 text-xs lg:text-sm">
                        <div className="flex items-center space-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"/>
                            </svg>
                            <span className="uppercase">Auction 1</span>
                        </div>
                        <div className="flex flex-col items-end text-xs">
                            <div>Lot #<strong className="font-semibold">{lot.lot_number}</strong></div>
                        </div>
                    </div>
                    <h3 className="text-base lg:text-xl font-semibold mb-4 uppercase tracking-wider">
                        {lot.title}
                    </h3>
                    <div className="bg-main text-white p-5 text-sm rounded shadow my-3 drop-shadow-lg">
                        <BidForm lot={lot}/>
                    </div>
                    <div className="space-y-3">
                        <div className="mb-6 text-sm">
                            <h4 className="mb-2 text-main font-semibold">
                                Extra Information
                            </h4>
                            <p>{lot.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const LotImages: React.FC<{ image: string; title: string }> = (props) => {
    return (
        <div className="basis-2/3 xl:pr-3">
            <div>
                <img src={props.image} alt={props.title}/>
            </div>
        </div>
    );
}