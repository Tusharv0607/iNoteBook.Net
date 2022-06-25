import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    const Logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        useEffect(() => {
            navigate('./Login');
        })
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNoteBook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""} `} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/AboutUs" ? "active" : ""}`} to="/AboutUs">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex me-2" role="search">
                        <Link className="btn btn-outline-primary mx-2" to="/Login" role="button">Login</Link>
                        <Link className="btn btn-outline-primary mx-2" to="/Signup" role="button">Signup</Link>
                    </form> : <form  className="d-flex me-2">
                        <button className="btn btn-success me-2" onClick={Logout}>Logout</button>
                        {/* <input className="form-control me-2" type="search" placeholder="Search your notes" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>}
                </div>
            </div>
        </nav>
    )
}
export default Navbar