// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthChoicePage from './pages/AuthChoicePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Home from './pages/Home';
import Cart from './pages/Cart';
import MyOrders from './pages/Orders';
import DeliveryDashboard from './pages/DeliveryDashboard';
import TrackDelivery from './pages/TrackDelivery';
import Navbar from './components/Navbar';

// Layout to wrap all customer pages with the customer Navbar
const CustomerLayout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing and auth */}
        <Route path="/" element={<AuthChoicePage />} />
        <Route path="/login/:role" element={<LoginPage />} />
        <Route path="/signup/:role" element={<SignupPage />} />

        {/* Customer pages (with Navbar) */}
        <Route path="/home" element={<CustomerLayout><Home /></CustomerLayout>} />
        <Route path="/cart" element={<CustomerLayout><Cart /></CustomerLayout>} />
        <Route path="/orders" element={<CustomerLayout><MyOrders /></CustomerLayout>} />

        {/* Delivery person dashboard */}
        <Route path="/delivery/dashboard" element={<DeliveryDashboard />} />

        {/* Shared tracking page */}
        <Route path="/track/:orderId" element={<TrackDelivery />} />
      </Routes>
    </Router>
  );
}

export default App;
