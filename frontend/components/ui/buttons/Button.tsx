import React from 'react';

import Loader from '@/components/ui/loaders/Loader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  loading = false,
  ...props
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    primary: loading 
      ? 'bg-[#2563EB] text-white focus:ring-[#2563EB]' 
      : 'bg-[#2563EB] text-white hover:bg-[#FBBF24] hover:text-gray-900 focus:ring-[#2563EB]',
    secondary: loading
      ? 'bg-gray-200 text-gray-900 focus:ring-gray-400'
      : 'bg-gray-200 text-gray-900 hover:bg-[#FBBF24] hover:text-gray-900 focus:ring-gray-400',
    outline: loading
      ? 'border-2 border-[#2563EB] text-[#2563EB] bg-transparent focus:ring-[#2563EB]'
      : 'border-2 border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#FBBF24] hover:border-[#FBBF24] hover:text-gray-900 focus:ring-[#2563EB]',
    ghost: loading
      ? 'text-[#2563EB] bg-transparent focus:ring-[#2563EB]'
      : 'text-[#2563EB] bg-transparent hover:bg-[#FBBF24] hover:text-gray-900 focus:ring-[#2563EB]',
    danger: loading
      ? 'bg-red-600 text-white focus:ring-red-500'
      : 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  return (
    <button className={`${combinedClassName} flex items-center justify-center gap-2`} {...props}>
      {children}
      {loading && <Loader size="sm" variant="secondary" />}
    </button>
  );
};

export default Button;
