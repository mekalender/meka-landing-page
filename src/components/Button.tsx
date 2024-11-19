import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  icon: Icon, 
  variant = 'primary', 
  fullWidth,
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`
        material-button
        ${variant === 'primary' 
          ? 'bg-primary text-on-primary hover:bg-primary/90 border border-transparent' 
          : 'bg-surface text-primary hover:bg-surface/90 border border-gray-200'}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      <span className="flex items-center justify-center">
        {children}
        {Icon && <Icon className="ml-2 h-5 w-5" />}
      </span>
    </button>
  );
}