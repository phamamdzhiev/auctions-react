import {useEffect, useState} from "react";
import {supabase} from "../helpers/supbaseClient";
import {Lot} from "../types";
import {Ordering} from "../App";

export const useFetchLots = (ordering?: string | null) => {
    const [lots, setLots] = useState<Lot[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            let query = supabase.from('lots').select('*')

            if (ordering === Ordering.Descending) {
                query.order('current_bid', {ascending: false});
            } else {
                query.order('id');
            }

            try {
                const {data} = await query;
                setLots(data as Lot[]);
            } catch (error) {
                console.error('Error fetching lots: ', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [ordering]);

    return {lots, setLots, isLoading};
};
