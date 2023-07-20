import { useDispatch } from "react-redux"
import { createBench } from "../../store/benches"
import { useState } from "react"
import { useHistory, useLocation } from "react-router-dom"

export default function BenchForm() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(10)
    const [description, setDescription] = useState("")
    const [seating, setSeating] = useState(0)
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    debugger


    const handleSubmit = () => {
        dispatch(createBench({ title: title, price: price, description: description, seating: seating }))

        history.push(`/`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" value={seating} onChange={(e) => setSeating(e.target.value)} />
            {/* <input type="number" value={lat} disabled /> */}
            {/* <input type="number" value={lng} disabled /> */}
        </form>
    )
}