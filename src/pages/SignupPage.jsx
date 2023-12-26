import React from 'react';
import SignupForm from '../components/SignupForm';
import axios from 'axios';
const SignupPage = () => {

    const handleSignup = async (formData) => {
        try{
            const user   = await axios.post("https://notice-back-8mgu.onrender.com/auth/register",formData);
console.log(user);

        }catch(error){
console.log(error);
        }
      };
    
    
    
  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm onSignup={handleSignup} />
    </div>
  );
};

export default SignupPage;
