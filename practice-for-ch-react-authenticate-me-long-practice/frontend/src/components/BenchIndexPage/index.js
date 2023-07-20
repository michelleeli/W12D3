import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBenches } from "../../store/benches";
import BenchList from "./BenchList";
import BenchListItem from "./BenchListItem";

export default function BenchIndexPage() {
    const benches = useSelector((state) => Object.values(state.benches))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBenches())
    }, [])

    return (
        <div className="BenchIndex">
            <BenchList benches={benches} />
        </div>
    )
}