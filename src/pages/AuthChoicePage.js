// src/pages/AuthChoicePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthChoicePage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('customer'); // default

  const handleNavigation = (type) => {
    // type = 'login' or 'signup'
    navigate(`/${type}/${role}`);
  };

  return (
    <div>
      <h2>Select Your Role</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="delivery">Delivery Person</option>
      </select>

      <br /><br />
      <button onClick={() => handleNavigation('login')}>Login</button>
      <button onClick={() => handleNavigation('signup')}>Signup</button>
    </div>
  );
};

export default AuthChoicePage;
