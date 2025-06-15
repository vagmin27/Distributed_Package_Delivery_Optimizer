// src/pages/TrackDelivery.js
import React from 'react';
import { useParams } from 'react-router-dom';

const TrackDelivery = () => {
  const { orderId } = useParams();

  return (
    <div>
      <h2>Tracking Order #{orderId}</h2>
      {/* Google Map will go here later */}
    </div>
  );
};

export default TrackDelivery;
