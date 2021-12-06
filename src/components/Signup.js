import React, {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/notes/NoteContext';

export default function Signup() {
    const [firstTimeCredential, setfirstTimeCredential] = useState({username:"", email:"", password: ""})
    let navigate = useNavigate();
    const context = useContext(NoteContext)
    const {showAlert} = context;
 
    const NewUserSubmit = async (e)=>{
        e.preventDefault();
        //api call
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: firstTimeCredential.username, email: firstTimeCredential.email, password: firstTimeCredential.password})//convert js to json
        });
        let json = await response.json()
        // console.log(json)
        if(json.Success === true){
            //redireact to
            navigate("/")
            showAlert(json.message, "success")
            localStorage.setItem('auth-token', json.authtoken)
        }
        else{
            showAlert(json.error, "danger")
        }
    }

    const onChange=(event)=>{
        setfirstTimeCredential({...firstTimeCredential, [event.target.name]: event.target.value })//here ...note is jo value note ke hai vo rahane de na aur jo change hoga means when event occur on that thing tabh value  assign kr dena us thing ko means title name ka event occur huva hai to {title: jo event occur ho raha hai vo}
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" id="username" minLength={6} placeholder="Enter your Username here" aria-describedby="username"  onChange={onChange} required/>
                    <div id="username" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control"  name="email" id="email" aria-describedby="emailHelp" onChange={onChange} required/>
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" minLength={8} onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  id="Cpassword" name="Cpassword" minLength={8} onChange={onChange} required/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={NewUserSubmit}>Submit</button>
            </form>
        </div>
    )
}
