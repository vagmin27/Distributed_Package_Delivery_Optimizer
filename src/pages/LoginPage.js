// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { role } = useParams(); // 'customer' or 'delivery'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Save role to localStorage or context if needed
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
      <h2>Login as {role === 'customer' ? 'Customer' : 'Delivery Person'}</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
