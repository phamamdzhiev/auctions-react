import {Lot} from '../types';
import {supabase} from "../helpers/supbaseClient";
import {bidderPremium, currencyFormat, determineMinBid} from "../helpers/utils";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {Link} from "react-router-dom";

export default function BidForm(props: { lot: Lot }) {
    const [isLoading, setIsLoading] = useState(false);
    const auth = useSelector((state: RootState) => state.auth)
    const [lot, setLot] = useState(props.lot);

    const handleBid = async () => {
        setIsLoading(true);
        try {
            const {data} = await supabase.from('lots')
                .update({current_bid: determineMinBid(lot.current_bid)})
                .eq('id', lot.id)
                .select()
                .single()

            setLot(data)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <p className="text-sm text-white font-normal">Current bid</p>
            <p className="text-xl lg:text-2xl text-white font-semibold">
                <span className="current_bid-js">{currencyFormat(lot.current_bid)}</span>
            </p>
            <p className="text-xs">Price + commission: <span
                className="bidder_premium-js">{bidderPremium(lot.current_bid)}</span></p>
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-3 mt-6">
                <div className="relative">
                    <label className="text-base" htmlFor="amount">Min next bid: <span
                        className="min_next_bid-js">{currencyFormat(determineMinBid(lot.current_bid))}</span></label>
                </div>
                {auth.user &&
                    <button disabled={isLoading} onClick={handleBid} type="submit"
                            className="btn-secondary rounded-md">Place Bid</button>}
            </div>
            {!auth.user &&
                <p className="mt-3 text-base">
                    <Link className="text-gold hover:underline" to="/login">Log In</Link> to bid!</p>
            }
        </>
    );
}