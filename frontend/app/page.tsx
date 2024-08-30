'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [drivers, setDrivers] = useState<any[]>([]);
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch drivers from the backend
  const fetchDrivers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/driver');  // Updated URL
      if (!response.ok) {
        throw new Error('Failed to fetch drivers');
      }
      const data = await response.json();
      setDrivers(data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  // Fetch vehicles from the backend
  const fetchVehicles = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/vehicle');  // Updated URL
      if (!response.ok) {
        throw new Error('Failed to fetch vehicles');
      }
      const data = await response.json();
      setVehicles(data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchDrivers();
      await fetchVehicles();
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Drivers</h1>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id}>
            {driver.name} - {driver.phoneNumber}
          </li>
        ))}
      </ul>

      <h1>Vehicles</h1>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.vehicleNumber} - {vehicle.vehicleType}
          </li>
        ))}
      </ul>
    </div>
  );
}
