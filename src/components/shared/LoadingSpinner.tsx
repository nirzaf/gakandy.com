import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

export default function LoadingSpinner({ size = 40, color = '#22B0EB' }: LoadingSpinnerProps) {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="rounded-full border-4 border-t-transparent"
        style={{
          width: size,
          height: size,
          borderColor: `${color}33`,
          borderTopColor: color,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
