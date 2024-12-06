import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GridProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  className?: string;
}

export default function Grid({
  children,
  cols = { sm: 1, md: 2, lg: 3 },
  gap = 8,
  className = '',
  ...props
}: GridProps) {
  const getGridCols = () => {
    const { sm = 1, md = 2, lg = 3, xl } = cols;
    return `
      grid-cols-${sm}
      md:grid-cols-${md}
      lg:grid-cols-${lg}
      ${xl ? `xl:grid-cols-${xl}` : ''}
    `;
  };

  return (
    <motion.div
      className={`grid ${getGridCols()} gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
