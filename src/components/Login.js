import React, {useState, useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [Credentials, setCredentials] = useState({email:"", password:""})
    const context = useContext(NoteContext);
    const {showAlert} = context;
    let navigate = useNavigate();

    const loginSubmit = async (e)=>{
        e.preventDefault();
        // fetch api
        const response = await fetch(`http://localhost:5000/api/auth/loginuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: Credentials.email, password: Credentials.password})//convert js to json
        });
        const json = await response.json();//here is response that will show u addnote info
        // console.log(json)
        if(json.success === true){
            // save the authtoken in localstorage and redirect
            showAlert("Successfully Login", "success")
            localStorage.setItem('auth-token', json.authtoken)
            navigate("/")
        }else{
            showAlert(json.error,"danger")
        }
    }
    const onChange=(event)=>{
        setCredentials({...Credentials, [event.target.name]: event.target.value })//here ...note is jo value note ke hai vo rahane de na aur jo change hoga means when event occur on that thing tabh value  assign kr dena us thing ko means title name ka event occur huva hai to {title: jo event occur ho raha hai vo}
    }

    return (
        <div>
            <form >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email"  aria-describedby="emailHelp" onChange={onChange}/>
                    <div id="emailHelp" className="form-text">Use correct credentials</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" name="password"  className="form-control" id="exampleInputPassword1" onChange={onChange}/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary" onClick={loginSubmit}>Submit</button>
            </form>
        </div>
    )
}
