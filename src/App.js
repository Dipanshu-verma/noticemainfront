 
import './App.css';
import {Route, Link, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyNoticesPage from './pages/MyNoticesPage';
import { useState } from 'react';
import Navbar from './pages/Navbar';
import CreateNotice from './pages/CreateNotice';
 
function App() {

  
const bool =  JSON.parse(localStorage.getItem("jwt_token")) ? true : false
const [login,setLogin]  = useState(bool)

function handlelogout(){
  localStorage.clear();
  setLogin(false);
}
  return (
    <div>
  
<Navbar handlelogout={handlelogout} login={login} />
   <Routes>

        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage setLogin={setLogin} />} />

        <Route path="/home" element={<HomePage login={login}/>} />
        <Route path="/" element={<HomePage login={login}/>} />
        <Route path="/noticecreate" element={<CreateNotice/>} />

        <Route path="/my-notices" element={<MyNoticesPage/>} />
        </Routes>
      </div>
  );
}

export default App;
