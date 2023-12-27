import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
const navigate =useNavigate();
    const handleSignup = async (formData) => {
        try{
            const user   = await axios.post("https://notice-back-8mgu.onrender.com/auth/register",formData);
            console.log(user);
        navigate("/login")
        }catch(error){
            console.log(error);

        }
      };
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '',
        department: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        
        handleSignup(formData);
      };
    
    
  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} />

      <label>Password:</label>
      <input type="password" name="password" onChange={handleChange} />

      <label>Phone Number:</label>
      <input type="text" name="phone_number" onChange={handleChange} />

      <label>Department:</label>
      <input type="text" name="department" onChange={handleChange} />

      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};

export default SignupPage;
