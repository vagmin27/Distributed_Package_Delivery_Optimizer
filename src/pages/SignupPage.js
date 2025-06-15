// src/pages/SignupPage.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const { role } = useParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem('role', role);

    // Redirect based on role
    if (role === 'customer') {
      navigate('/home');
    } else {
      navigate('/delivery/dashboard');
    }
  };

  return (
    <div>
      <h2>Signup as {role === 'customer' ? 'Customer' : 'Delivery Person'}</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
