import './App.css'
import {fetchDecode, fetchEncode, passwordChange} from "./store/action";
import {useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch();

    return (
        <form className="form">
            <div>
                <label>Decoded Message</label>
                <textarea cols="60" rows="10" onChange={(e) => dispatch(fetchDecode(e.target.value))}></textarea>
            </div>
            <div>
                <label className="label-password"> Code Password</label>
                <input className="password-input" type="text" onChange={(e) => dispatch(passwordChange(e.target.value))}/>
                <button type="button">Decode</button>
                <button type="button">Encode</button>
            </div>
            <div>
                <label>Encoded Message</label>
                <textarea cols="60" rows="10" onChange={(e) => dispatch(fetchEncode(e.target.value))}></textarea>
            </div>
        </form>
    )
};

export default App;
