import BenchListItem from "./BenchListItem";

export default function BenchList({ benches }) {
    return (
        <div>
            <h1>Benches</h1>
            {benches.map(bench => (
                <BenchListItem key={bench.id} bench={bench} />
            ))}
        </div>
    )
}