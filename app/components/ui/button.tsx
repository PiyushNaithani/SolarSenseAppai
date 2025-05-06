import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={clsx("bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
