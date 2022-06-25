import authContext from "./authContext";
import React from "react";
import { useNavigate } from 'react-router-dom';

const AuthState = (props) => {

    const host = 'https://inotebook-serv.herokuapp.com';
    let navigate = useNavigate();

    //-------------------------------------------------------------------------------------------//
    //Login Authentication

    const authLogin = async (email, password) => {

        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ email, password })
        })

        const json = await response.json()
        if (response.status === 200) {
            localStorage.setItem('token', json.token);
            localStorage.setItem('userName', json.username);
            navigate("/");
            props.showAlert("Logged in successfully!", "success")
        }
        else if (response.status === 404) {
            props.showAlert("User Not Found! Please enter correct crediantials", "danger")
        }
        else if (response.status === 400) {
            props.showAlert("Invalid email or password!", "danger")
        }
    }

    //-------------------------------------------------------------------------------------------//
    //SignUp & Authentication

    const authSignup = async (username, email, password) => {

        const response = await fetch(`${host}/api/auth/signUp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ username, email, password })
        });

        const json = await response.json();

        if (response.status === 200) {
            localStorage.setItem('token', json.token);
            localStorage.setItem('userName', json.username);
            navigate("/");
            props.showAlert("Successfully Signed Up!", "success")
        }
        else if (response.status === 404) {
            props.showAlert("Email already exist! Please Login", "danger")
        }
        else {
            props.showAlert("Enter correct details!", "warning")
        }
    }
    return (
        <authContext.Provider value={{ authLogin, authSignup }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;