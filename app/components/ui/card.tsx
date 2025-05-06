// components/ui/card.tsx
import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`rounded-lg border shadow-lg ${className}`}>{children}</div>;
};

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
  return <div className={`p-4 bg-gray-200 ${className}`}>{children}</div>;
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
};

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ className, children }) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
