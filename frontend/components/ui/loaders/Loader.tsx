import React from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  className?: string;
  fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  variant = 'primary',
  className = '',
  fullScreen = false,
}) => {
  const sizeStyles = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-4',
  };

  const variantStyles = {
    primary: 'border-[#2563EB] border-t-transparent',
    secondary: 'border-[#FBBF24] border-t-transparent',
  };

  const spinnerClassName = `rounded-full animate-spin ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
        <div className={spinnerClassName}></div>
      </div>
    );
  }

  return <div className={spinnerClassName}></div>;
};

export default Loader;
