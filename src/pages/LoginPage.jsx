import React,{useState} from 'react';
 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({setLogin}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
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

     
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
        handleLogin(formData);
      };
    
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} />

      <label>Password:</label>
      <input type="password" name="password" onChange={handleChange} />

      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginPage;
