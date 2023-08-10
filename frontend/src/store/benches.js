import csrfFetch from "./csrf"

// CONSTANTS

export const SET_BENCHES = 'benches/setBenches';
export const ADD_BENCH = 'benches/addBench';

// ACTION CREATORS

export const setBenches = benches => ({ type: SET_BENCHES, payload: benches });
export const addBench = bench => ({ type: ADD_BENCH, payload: bench });

// SELECTORS 

export const getBenches = state => {
    return state.benches ? Object.values(state.benches) : [];
}

export const getBench = benchId => state => {
    return state.benches ? state.benches[benchId] : null;
}

// THUNK ACTION CREATORS

export const fetchBenches = () => async dispatch => {
    const res = await csrfFetch('/api/benches');

    if (res.ok) {
        const benches = await res.json();
        dispatch(setBenches(benches));
    }
}

export const fetchBench = benchId => async dispatch => {
    const res = await csrfFetch(`/api/benches/${benchId}`);

    if (res.ok) {
        const bench = await res.json();
        dispatch(addBench(bench));
    }
}

export const createBench = benchData => async dispatch => {
    const res = await csrfFetch('/api/benches', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(benchData)
    });

    if (res.ok) {
        const newBench = await res.json();
        dispatch(addBench(newBench));
        return newBench;
    }
}

// REDUCER 

export default function benchesReducer(state = {}, action) {
    const nextState = { ...state };
    
    switch (action.type) {
        case SET_BENCHES: 
            return action.payload.benches;
        case ADD_BENCH: 
            nextState[action.payload.bench.id] = action.payload.bench;
            return nextState
        default: 
            return state;
    }
}