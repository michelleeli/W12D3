import BenchListItem from "./BenchListItem";

export default function BenchList({benches}) {
    return (
        <>
        <h1>benches</h1>
        <div className="BenchList">
            {benches.map((bench) => <BenchListItem className="item" key={`${bench.id}`} bench={bench}/>)}
        </div>
        </>
    )
}