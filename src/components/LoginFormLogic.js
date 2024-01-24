// src/components/LoginFormLogic.js
import React, { useState } from 'react';

const LoginFormLogic = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validate = () => {
    setEmailError('');
    setPasswordError('');

    if (email.length < 10) {
      setEmailError('Please fill up your Email Or Phone');
      return false;
    }

    if (password.length < 8) {
      setPasswordError('Please fill your Password');
      return false;
    }

    onSubmit({ email, password });
    return true;
  };

  return (
    <form className="login_form" method="post" name="form" action="home.html" onSubmit={validate}>
      {/* ... (Paste the HTML content for the form here) */}
    </form>
  );
};

export default LoginFormLogic;
