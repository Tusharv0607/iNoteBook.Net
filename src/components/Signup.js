import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import authContext from '../context/authContext';


const Signup = (props) => {

    const context = useContext(authContext);
    const { authSignup } = context;
    const [crediantials, setCrediantials] = useState({ username: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let pswrd = document.getElementById('Password1').value;
        let cPswrd = document.getElementById('Password2').value;
        if (pswrd===cPswrd) {
            authSignup(crediantials.username, crediantials.email, crediantials.password);
        }
        else
        props.showAlert("Password mismatched", "danger")
    }

    const onChange = (e) => {
        setCrediantials({ ...crediantials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container my-3'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name</label>
                        <input type="text" className="form-control" value={crediantials.name} name="username" onChange={onChange} id="exampleInputName1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={crediantials.email} name="email" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={crediantials.password} name="password" onChange={onChange} id="Password1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Re-Enter Password</label>
                        <input type="password" className="form-control" name="cPassword" id="Password2" />
                    </div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                </form>
                <div className="my-2">Already have an account!  <Link to="/Login">Login</Link></div>
            </div>
        </>
    )
}

export default Signup