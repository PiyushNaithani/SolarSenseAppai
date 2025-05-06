'use client';

import React, { useState } from 'react';
import Button from './components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from './components/ui/card';
import { Sun, Shield, RotateCw } from 'lucide-react';

interface StatusState {
  status: string;
}

export default function Home() {
  const [statusState, setStatusState] = useState<StatusState | null>(null);

  const updateStatus = (newStatus: string) => {
    setStatusState({ status: newStatus });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to SolarSense</h1>

      {/* Status Section */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Current Status:</h2>
        <p className="text-lg mb-4">{statusState?.status || 'No status set'}</p>
        <div className="flex gap-4 justify-center">
          <Button label="Activate Solar Panel" onClick={() => updateStatus('Solar Panel Active')} />
          <Button label="Deactivate Solar Panel" onClick={() => updateStatus('Solar Panel Inactive')} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Card 1 */}
        <Card>
          <CardHeader>
            <Sun className="h-10 w-10 text-yellow-500 mx-auto" />
            <CardTitle className="text-center mt-4">Smart Solar</CardTitle>
            <CardDescription className="text-center">
              Optimize energy usage and monitor solar output in real-time.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center mt-4">
            <Button label="Learn More" />
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card>
          <CardHeader>
            <Shield className="h-10 w-10 text-blue-500 mx-auto" />
            <CardTitle className="text-center mt-4">Secure Systems</CardTitle>
            <CardDescription className="text-center">
              Ensure secure energy transactions and protect user data.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center mt-4">
            <Button label="Discover" />
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card>
          <CardHeader>
            <RotateCw className="h-10 w-10 text-green-500 mx-auto" />
            <CardTitle className="text-center mt-4">Automated Insights</CardTitle>
            <CardDescription className="text-center">
              Get real-time analytics and actionable insights for efficiency.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center mt-4">
            <Button label="Explore" />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
