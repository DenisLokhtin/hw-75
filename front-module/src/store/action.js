import axios from "axios";

export const FETCH_ENCODE = 'FETCH_ENCODE';
export const FETCH_DECODE =  'FETCH_DECODE';
export const PASSWORD_CHANGE =  'PASSWORD_CHANGE';

export const fetchEncode = message => ({type: FETCH_ENCODE, payload: message});
export const fetchDecode = message => ({type: FETCH_DECODE, payload: message});
export const passwordChange = message => ({type: PASSWORD_CHANGE, payload: message});

export const Encode = (message, password) => {
    return async dispatch => {
        const response = await axios.post('http://127.0.0.1:8009/encode', {message: message, password: password});
        dispatch(fetchDecode(response.data.encoded));
    }
};

export const Decode = (message, password) => {
    return async dispatch => {
        const response = await axios.post('http://127.0.0.1:8009/decode', {message: message, password: password});
        dispatch(fetchEncode(response.data.decoded));
    }
};