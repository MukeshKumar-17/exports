import React from 'react';
import { motion, Variants } from 'framer-motion';

// Refined editorial bezier curve: smooth acceleration, prolonged deceleration
const EDITORIAL_EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export const editorialStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

export const editorialEyebrow: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EDITORIAL_EASE,
    },
  },
};

export const editorialHeadline: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: EDITORIAL_EASE,
    },
  },
};

export const editorialSubtext: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EDITORIAL_EASE,
    },
  },
};

export const editorialGridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const editorialGridItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EDITORIAL_EASE,
    },
  },
};

interface SectionHeaderMotionProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Editorial motion container that triggers a synchronized 'fade up and slide'
 * entrance animation for section eyebrow, title, and descriptive copy as they enter viewport.
 */
export const SectionHeaderMotion: React.FC<SectionHeaderMotionProps> = ({
  className = '',
  children,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-70px' }}
      variants={editorialStaggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { motion };
