import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ReflectiveSurfaceProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function ReflectiveSurface({
  children,
  className = '',
  hoverEffect = false,
}: ReflectiveSurfaceProps) {
  const hoverVariants = hoverEffect
    ? {
        hover: {
          y: -5,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
          transition: {
            type: 'spring',
            stiffness: 500,
          },
        },
      }
    : {};

  return (
    <motion.div
      className={`reflective-surface ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      whileHover={hoverEffect ? 'hover' : undefined}
      variants={hoverVariants}
    >
      {children}
    </motion.div>
  );
}
