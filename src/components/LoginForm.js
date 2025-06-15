import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('customer');

  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Add login logic and verify role matches

    // Redirect based on role
    if (role === 'customer') navigate('/main/home');
    else if (role === 'delivery') navigate('/delivery/dashboard');
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="delivery">Delivery Person</option>
      </select>

      <button type="submit">Login</button>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </form>
  );
};

export default LoginForm;
