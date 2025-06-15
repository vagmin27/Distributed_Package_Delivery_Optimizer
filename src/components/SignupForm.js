import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('customer'); // default role

  const handleSignup = (e) => {
    e.preventDefault();

    // TODO: Add real signup logic and store role in DB

    // Redirect based on role
    if (role === 'customer') navigate('/main/home');
    else if (role === 'delivery') navigate('/delivery/dashboard');
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="delivery">Delivery Person</option>
      </select>

      <button type="submit">Signup</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  );
};

export default SignupForm;
