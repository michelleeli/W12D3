import csrfFetch from "./csrf";

// fetchBench should take in a benchId and make a request to GET / api / benches /:id with benchId interpolated into the:id dynamic segment.
// createBench should take in a benchData object and make a request to POST / api / benches, with benchData as the request body.

const SET_BENCHES = 'benches/setBenches'
const ADD_BENCH = 'benches/addBench'

const setBenches = (benches) => ({
    type: SET_BENCHES,
    benches
})

const addBench = (bench) => ({
    type: ADD_BENCH,
    bench
})

export const fetchBenches = () => async dispatch => {
    const res = await csrfFetch('/api/benches')
    if (res.ok) {
        const data = await res.json();
        dispatch(setBenches(data))
    }
}

export const fetchBench = (benchId) => async dispatch => {
    const res = await csrfFetch(`/api/benches/${benchId}`)
    if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch(addBench(data))
    }
}

export const createBench = (benchData) => async dispatch => {
    const res = await csrfFetch('/api/benches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(benchData)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addBench(data))
    }
}
const benchesReducer = (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case SET_BENCHES:
            newState = { ...state, ...action.benches }
            return newState
        case ADD_BENCH:
            newState = {...state, [action.bench.id]: [action.bench]}
        default:
            return state
    }

}
export default benchesReducer 