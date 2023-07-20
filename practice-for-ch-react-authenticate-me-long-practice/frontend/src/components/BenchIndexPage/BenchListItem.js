import { useHistory } from "react-router-dom"

export default function BenchListItem({ bench }) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/benches/${bench.id}`)
    }

    return (
        <div className="BenchListItem" onClick={handleClick}>
            <h3>{bench.title}</h3>
            <p>{`Price: ${bench.price}`}</p>
        </div>
    )
}