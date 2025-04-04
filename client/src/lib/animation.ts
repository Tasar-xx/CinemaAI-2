import { Variants } from 'framer-motion';

// Reusable animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const parallaxEffect = (strength: number = 100) => {
  return {
    initial: { y: 0 },
    animate: (offset: number) => ({
      y: offset / strength,
    }),
  };
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const hoverScaleEffect = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

// Transition presets
export const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

export const easeTransition = {
  type: 'ease',
  duration: 0.6,
};

export const defaultTransition = {
  duration: 0.5,
};

// Scroll animation control
export const getScrollAnimationProps = (delay: number = 0) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
  variants: fadeInUp,
});
