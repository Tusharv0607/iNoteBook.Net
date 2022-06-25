import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import NoteState from './context/NoteState';
import AboutUs from "./components/AboutUs";
import Signup from './components/Signup';
import Login from './components/Login';
import AuthState from './context/AuthState';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  return (
    <>
      <BrowserRouter>
        <AuthState  showAlert={showAlert}>
          <NoteState  showAlert={showAlert}>
            <Navbar />
            <Alert alert={alert} />
            <div className='container'>
              <Routes>
                <Route exact path='/' element={<Home showAlert={showAlert} />}></Route>
                <Route exact path='/aboutus' element={<AboutUs />}></Route>
                <Route exact path='/login' element={<Login showAlert={showAlert} />}></Route>
                <Route exact path='/signup' element={<Signup showAlert={showAlert} />}></Route>
              </Routes>
            </div>
          </NoteState>
        </AuthState>
      </BrowserRouter>
    </>
  );
}

export default App;
