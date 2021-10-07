import {FETCH_ENCODE, FETCH_DECODE, PASSWORD_CHANGE} from "./action";

const initialState = {
    encodeMessage: '',
    decodeMessage: '',
    password: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ENCODE:
            return {...state, encodeMessage: action.payload};
        case FETCH_DECODE:
            return {...state, decodeMessage: action.payload};
        case PASSWORD_CHANGE:
            return {...state, password: action.payload};
        default:
            return state;
    }
}


export default reducer;