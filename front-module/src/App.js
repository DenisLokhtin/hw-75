import {Decode, Encode, fetchDecode, fetchEncode, passwordChange} from "./store/action";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import './App.css'

const App = () => {
    const dispatch = useDispatch();
    const encodeMessage = useSelector(state => state.encodeMessage);
    const decodeMessage = useSelector(state => state.decodeMessage);
    const password = useSelector(state => state.password);
    const re = new RegExp('^[a-zA-Z]*$');

    const [buttonDis, setButtonDis] = useState(true)

    const setButton = (e) => {
        if (!e.target.value.match(re)) return;
        dispatch(passwordChange(e.target.value));
        if (e.target.value.length === 0) {
            setButtonDis(true)
            return
        }
        setButtonDis(false);
    };

    return (
        <form className="form">
            <div>
                <label>Decoded Message</label>
                <textarea cols="60" rows="10" value={decodeMessage}
                          onChange={(e) => dispatch(fetchDecode(e.target.value))}></textarea>
            </div>
            <div>
                <label className="label-password"> Code Password</label>
                <input className="password-input" type="text" value={password} onChange={(e) => setButton(e)}/>
                <button disabled={buttonDis} onClick={() => dispatch(Decode(decodeMessage, password))}
                        type="button">Decode
                </button>
                <button disabled={buttonDis} onClick={() => dispatch(Encode(encodeMessage, password))}
                        type="button">Encode
                </button>
            </div>
            <div>
                <label>Encoded Message</label>
                <textarea cols="60" rows="10" value={encodeMessage}
                          onChange={(e) => dispatch(fetchEncode(e.target.value))}></textarea>
            </div>
        </form>
    )
};

export default App;
