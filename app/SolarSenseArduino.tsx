'use client'; // Marking this as a Client Component to allow event handlers

import React from 'react';
import Button from './components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './components/ui/card';

const SolarSenseArduino = () => {
  const handleClick = () => {
    alert('Button Clicked');
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">SolarSense Arduino Interface</h1>

      <Card>
        <CardHeader>
          <CardTitle>Solar Panel Data</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Data from Arduino goes here...</p>
        </CardContent>
      </Card>

      <div className="mt-4">
        <Button onClick={handleClick}>Connect to Arduino</Button>
      </div>
    </div>
  );
};

export default SolarSenseArduino;
