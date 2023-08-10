import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchBench, getBench } from "../../store/benches";
import { useEffect } from "react";

export default function BenchShowPage() {
    const dispatch = useDispatch();
    const { benchId } = useParams();
    const bench = useSelector(getBench(benchId));
    
    useEffect(() => {
        dispatch(fetchBench(benchId));
    }, [dispatch, benchId]);
    
    return (
        <div>
            <header>
                <h2>{bench.title}</h2>
                <Link to="/">Back to Bench Index Page</Link>
            </header>

            <section>
                <h3>Details</h3>
                <p>Description: {bench.description}</p>

                <ul>
                    <li># of seats: {bench.seating}</li>
                    <li>Location: {bench.lat}, {bench.lng}</li>
                </ul>
            </section>
        </div>
    );
}