// components/ui/button.tsx
import React from 'react';

const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
