import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function BenchListItem({ bench }) {
    const history = useHistory();
    
    const handleBenchClick = () => {
        history.push(`/benches/${bench.id}`);
    };

    return (
        <div onClick={handleBenchClick}>
            <h3>{bench.title}</h3>
            <p>Price: ${bench.price}</p>
        </div>
    )
}