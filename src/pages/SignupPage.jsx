import React from 'react';
import SignupForm from '../components/SignupForm';

const SignupPage = ({ onSignup }) => {
  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm onSignup={onSignup} />
    </div>
  );
};

export default SignupPage;
