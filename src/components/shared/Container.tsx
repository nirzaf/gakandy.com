import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

export default function Container({
  children,
  size = 'lg',
  padding = true,
  className = '',
  ...props
}: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[90rem]',
    full: 'max-w-full'
  };

  return (
    <div
      className={`
        mx-auto
        w-full
        ${sizes[size]}
        ${padding ? 'px-4 sm:px-6 lg:px-8' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
