"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';

interface Driver {
  id: number;
  name: string;
  phoneNumber: string;
}

export default function DriverList() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/driver')
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching drivers:", error);
      });
  }, []);

  return (
    <div>
      <h1>Drivers</h1>
      <ul>
        {drivers.map(driver => (
          <li key={driver.id}>{driver.name} - {driver.phoneNumber}</li>
        ))}
      </ul>
    </div>
  );
}
