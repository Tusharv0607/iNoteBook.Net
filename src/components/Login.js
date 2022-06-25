import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import authContext from '../context/authContext';

const Login = (props) => {

    const context = useContext(authContext);
    const { authLogin } = context;
    const [crediantials, setCrediantials] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (crediantials.email === "") {
            props.showAlert("Please enter a valid email", "warning")
        }
        else {
            authLogin(crediantials.email, crediantials.password);
        }
    }

    const onChange = (e) => {
        setCrediantials({ ...crediantials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='container my-3'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={crediantials.email} name="email" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={crediantials.password} name="password" onChange={onChange} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
               <div className="my-2">Don't have an account!  <Link to="/Signup">Signup</Link></div>
            </div>
        </>
    )
}

export default Login