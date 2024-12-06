import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-lg transition-all duration-200';
  
  const variantStyles = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    bordered: 'bg-white border border-gray-200 hover:border-gray-300',
  };

  const styles = [
    baseStyles,
    variantStyles[variant],
    onClick ? 'cursor-pointer' : '',
    className,
  ].join(' ');

  return (
    <motion.div
      className={styles}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
