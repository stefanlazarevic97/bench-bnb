import { useDispatch, useSelector } from "react-redux";
import { fetchBenches, getBenches } from "../../store/benches";
import { useEffect } from "react";
import BenchList from "./BenchList";

export default function BenchIndexPage() {
    const benches = useSelector(getBenches)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBenches())
    }, [dispatch]);

    return (
        <div>
            <h2>Bench Index Page</h2>
            <BenchList benches={benches} />
        </div>
    );
}