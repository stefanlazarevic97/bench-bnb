import csrfFetch from "./csrf"

export const SET_BENCHES = 'benches/setBenches';

export const setBenches = (benches) => ({ type: SET_BENCHES, payload: benches })

export const fetchBenches = () => async dispatch => {
    const res = await csrfFetch('/api/benches');

    if (res.ok) {
        const benches = await res.json();
        dispatch(setBenches(benches));
    }
}

export default function benchesReducer(state = {}, action) {
    switch (action.type) {
        case SET_BENCHES: 
            return action.payload.benches;
        default: 
            return state;
    }
}