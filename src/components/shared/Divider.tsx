import { HTMLAttributes } from 'react';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  color?: 'light' | 'medium' | 'dark';
  spacing?: 'sm' | 'md' | 'lg';
}

export default function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  color = 'medium',
  spacing = 'md',
  className = '',
  ...props
}: DividerProps) {
  const colors = {
    light: 'border-gray-200',
    medium: 'border-gray-300',
    dark: 'border-gray-400'
  };

  const variants = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted'
  };

  const spacings = {
    sm: orientation === 'horizontal' ? 'my-2' : 'mx-2',
    md: orientation === 'horizontal' ? 'my-4' : 'mx-4',
    lg: orientation === 'horizontal' ? 'my-8' : 'mx-8'
  };

  return (
    <hr
      className={`
        border-0
        ${orientation === 'horizontal' ? 'border-t w-full' : 'border-l h-full'}
        ${variants[variant]}
        ${colors[color]}
        ${spacings[spacing]}
        ${className}
      `}
      {...props}
    />
  );
}
