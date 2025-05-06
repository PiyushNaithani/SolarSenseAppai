// app/SolarSenseArduino.tsx

'use client'; // Marking this as a Client Component to allow event handlers

import React from 'react';
import Button from './components/ui/button';
import Card from './components/ui/card';

const SolarSenseArduino = () => {
  const handleClick = () => {
    alert('Button Clicked');
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">SolarSense Arduino Interface</h1>
      <Card title="Solar Panel Data" content="Data from Arduino goes here..." />
      <Button label="Connect to Arduino" onClick={handleClick} />
    </div>
  );
};

export default SolarSenseArduino;
