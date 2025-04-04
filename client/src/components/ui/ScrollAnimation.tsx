import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'scale' | 'slideLeft' | 'slideRight';
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  triggerOnce = true,
  threshold = 0.2,
  animation = 'fadeUp',
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: triggerOnce, amount: threshold });
  
  const animationVariants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`scrolling-animation ${className} ${isInView ? 'active' : ''}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animationVariants[animation]}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
