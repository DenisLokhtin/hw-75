import axios from "axios";
import {useSelector} from "react-redux";

export const FETCH_ENCODE = 'FETCH_ENCODE';
export const FETCH_DECODE =  'FETCH_DECODE';
export const PASSWORD_CHANGE =  'FETCH_DECODE';

export const fetchEncode = message => ({type: FETCH_ENCODE, payload: message});
export const fetchDecode = message => ({type: FETCH_DECODE, payload: message});
export const passwordChange = message => ({type: PASSWORD_CHANGE, payload: message});

export const Encode = () => {
    const encodeMessage = useSelector(state => state.encodeMessage);
    return async dispatch => {
        const response = await axios.get('http://127.0.0.1:8009/encode/' + encodeMessage);
        console.log(response.data)
        dispatch(fetchEncode(response.data));
    }
};

export const Decode = () => {
    const decodeMessage = useSelector(state => state.decodeMessage);
    return async dispatch => {
        const response = await axios.get('http://127.0.0.1:8009/decode/' + decodeMessage);
        console.log(response.data)
        dispatch(fetchDecode(response.data));
    }
};