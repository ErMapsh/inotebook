import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate  } from "react-router-dom";

export default function Navbar(props) {
    let location = useLocation();//he throw current endpoint information
    let navigate = useNavigate();
    useEffect(() => {
        // console.log(location.pathname)
        // eslint-disable-next-line
    }, [location.pathname]);

    const Logout = ()=>{
        localStorage.removeItem('auth-token');
        navigate('/login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                    </div>

                    <div>

                        {!localStorage.getItem('auth-token')?
                            <div>
                                <Link to="/login" className={`btn btn-primary mx-2 ${location.pathname === "/login" ? "active" : ""}`}>Login</Link>
                                <Link to="/signup" className={`btn btn-primary mx-2 ${location.pathname === "/signup" ? "active" : ""}`} >Signup</Link>
                            </div>:
                            <div>
                                <button className={`btn btn-primary mx-2 `} onClick={Logout}>Logout</button>
                            </div>

                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
