// app/transfer/page.tsx

"use client";

import axios from 'axios';
import { useState } from 'react';

const Transfer = () => {
  const [fromDriverId, setFromDriverId] = useState<number | ''>('');
  const [toDriverId, setToDriverId] = useState<number | ''>('');
  const [vehicleId, setVehicleId] = useState<number | ''>('');

  const handleTransfer = async () => {
    try {
      await axios.post('/api/transfer', {
        fromDriverId,
        toDriverId,
        vehicleId
      });
      alert('Transfer successful');
    } catch (error) {
      console.error('Error transferring vehicle:', error);
      alert('Transfer failed');
    }
  };

  return (
    <div>
      <h1>Transfer Vehicle</h1>
      <input
        type="number"
        placeholder="From Driver ID"
        value={fromDriverId}
        onChange={(e) => setFromDriverId(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="To Driver ID"
        value={toDriverId}
        onChange={(e) => setToDriverId(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Vehicle ID"
        value={vehicleId}
        onChange={(e) => setVehicleId(Number(e.target.value))}
      />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default Transfer;
