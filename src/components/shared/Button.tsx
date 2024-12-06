import { motion, HTMLMotionProps } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors';
  
  const variantStyles = {
    primary: 'bg-indigoDye-primary hover:bg-indigoDye-secondary text-white',
    secondary: 'bg-pictonBlue-primary hover:bg-pictonBlue-secondary text-white',
    outline: 'border-2 border-indigoDye-primary text-indigoDye-primary hover:bg-indigoDye-primary hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const styles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    disabled || loading ? 'opacity-70 cursor-not-allowed' : '',
    className,
  ].join(' ');

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={styles}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <LoadingSpinner size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} color="currentColor" />
          <span className="ml-2">{children}</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
