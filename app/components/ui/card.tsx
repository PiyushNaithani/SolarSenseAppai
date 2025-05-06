// components/ui/card.tsx
import React from 'react';

const Card = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
