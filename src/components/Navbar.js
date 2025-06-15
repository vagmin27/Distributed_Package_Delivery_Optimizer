// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/orders">My Orders</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
