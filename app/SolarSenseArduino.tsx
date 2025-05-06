// solarsenseapp.tsx

'use client'; // Marking this as a Client Component to allow event handlers

import React, { useState, useEffect } from 'react';
import Button from './components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './components/ui/card';
import { fetchWeather } from './services/weather';

const SolarSenseArduino = () => {
  const [weather, setWeather] = useState<any>(null);
  const [panelAngle, setPanelAngle] = useState<number>(30); // Default angle
  const [weatherError, setWeatherError] = useState<string>('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await fetchWeather('New York'); // Or use dynamic city input
        setWeather(data);
      } catch (error) {
        setWeatherError('Failed to fetch weather data.');
      }
    };

    fetchWeatherData();
  }, []);

  const handlePanelAdjust = (direction: string) => {
    if (direction === 'increase' && panelAngle < 90) {
      setPanelAngle(panelAngle + 5);
    } else if (direction === 'decrease' && panelAngle > 0) {
      setPanelAngle(panelAngle - 5);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">SolarSense Arduino Interface</h1>
      
      {/* Weather Information */}
      <Card>
        <CardHeader>
          <CardTitle>Weather Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          {weather ? (
            <div>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Condition: {weather.weather[0].description}</p>
              <p>Wind Speed: {weather.wind.speed} m/s</p>
            </div>
          ) : (
            <p>{weatherError || 'Loading weather data...'}</p>
          )}
        </CardContent>
      </Card>

      {/* Solar Panel Status */}
      <Card>
        <CardHeader>
          <CardTitle>Solar Panel Adjustment</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Current Angle: {panelAngle}°</p>
          <Button label="Increase Angle" onClick={() => handlePanelAdjust('increase')} />
          <Button label="Decrease Angle" onClick={() => handlePanelAdjust('decrease')} />
        </CardContent>
      </Card>
      
      {/* Button to Connect to Arduino */}
      <Button label="Connect to Arduino" onClick={() => alert('Button Clicked')} />
    </div>
  );
};

export default SolarSenseArduino;
