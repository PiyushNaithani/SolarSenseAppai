// components/ui/button.tsx
import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;  // Optional label prop
}

const Button: React.FC<ButtonProps> = ({ className, children, label, ...props }) => {
  return (
    <button
      className={clsx("bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded", className)}
      {...props}
    >
      {children || label} {/* If no children are passed, use the label as fallback */}
    </button>
  );
};

export default Button;
