import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { fetchBench } from "../../store/benches"
import { Link } from "react-router-dom/"

export default function BenchShowPage() {
    const dispatch = useDispatch()
    const benchId = useParams().benchId
    const bench = useSelector((state) => state.benches[benchId])

    useEffect(() => {
        dispatch(fetchBench(benchId))
    }, [benchId])


    return (
        <>
            <h1 className="BenchShow">{bench.title}</h1>
            <Link to="/">Back</Link>
            <div>
                {bench.title}
            </div>
            <h2>Details</h2>
            <p>{bench.description}</p>
            <ul>
                <li>{`Seating: ${bench.seating}`}</li>
                <li>{`Latitude: ${bench.lat}`}</li>
                <li>{`Longitude: ${bench.lng}`}</li>
            </ul>
        </>
    )
}