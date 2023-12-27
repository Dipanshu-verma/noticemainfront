 
import './App.css';
import {Route, Link, Routes, useNavigate } from 'react-router-dom';
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

const[userdetail, setUserDetail] =useState({
  token:JSON.parse(localStorage.getItem("jwt_token"))||null,
  
  user:JSON.parse(localStorage.getItem("user"))||null})


const navigate = useNavigate();
function handlelogout(){
  localStorage.clear();
  setUserDetail({token:null,user:null})

  navigate("/")
  setLogin(false);
}

  return (
    <div>
  
<Navbar handlelogout={handlelogout} login={login} />
   <Routes>

        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage setLogin={setLogin} userdetail={userdetail} setUserDetail={setUserDetail} />} />

        <Route path="/home" element={<HomePage login={login} userdetail={userdetail} />} />
        <Route path="/" element={<HomePage login={login} userdetail={userdetail}/>} />
        <Route path="/noticecreate" element={<CreateNotice userdetail={userdetail}/>} />

        <Route path="/my-notices" element={<MyNoticesPage userdetail={userdetail} />} />
        </Routes>
      </div>
  );
}

export default App;
