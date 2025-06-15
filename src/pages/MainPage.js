import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import Cart from './Cart';
import Orders from './Orders';

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default MainPage;
