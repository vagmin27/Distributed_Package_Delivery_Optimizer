// src/pages/DeliveryDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeliveryDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/');
  };

  const pendingOrders = [
    { id: 1, customer: 'Alice', address: 'Sector 5, Raipur' },
    { id: 2, customer: 'Bob', address: 'MG Road, Vizag' },
  ];

  return (
    <div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <h2>Pending Orders</h2>
      <ul>
        {pendingOrders.map((order) => (
          <li key={order.id}>
            Order #{order.id} for {order.customer} — {order.address}
            <button onClick={() => navigate(`/track/${order.id}`)}>Track Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryDashboard;
