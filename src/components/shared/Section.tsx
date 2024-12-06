import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'primary' | 'secondary';
}

export default function Section({
  children,
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  containerClassName = '',
  background = 'white',
  ...props
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-indigoDye-primary text-white',
    secondary: 'bg-pictonBlue-primary text-white',
  };

  return (
    <motion.section
      className={`py-20 ${backgroundStyles[background]} ${className}`}
      {...props}
    >
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-3xl md:text-4xl font-bold font-serif mb-4 ${
                  background === 'primary' || background === 'secondary'
                    ? 'text-white'
                    : 'text-indigoDye-primary'
                } ${titleClassName}`}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-lg ${
                  background === 'primary' || background === 'secondary'
                    ? 'text-gray-100'
                    : 'text-gray-600'
                } max-w-2xl mx-auto ${subtitleClassName}`}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
