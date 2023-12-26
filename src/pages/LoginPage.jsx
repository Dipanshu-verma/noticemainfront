import React from 'react';
import LoginForm from '../components/LoginForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({setLogin}) => {
    const navigate = useNavigate();
    const handleLogin = async (formData) => {
        try{
            const user   = await axios.post("https://notice-back-8mgu.onrender.com/auth/login",formData);
           
            localStorage.setItem("jwt_token", JSON.stringify(user.data.token))
            localStorage.setItem("user", JSON.stringify(user.data.user))
            navigate("/")

            setLogin(true);
        }catch(error){
console.log(error);
        }

      };
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
