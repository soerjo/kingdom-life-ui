'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  shineColor?: string; // Tailwind color classes for the gradient, e.g., 'from-transparent via-white/80 to-transparent'
}
const MotionSpan = motion.span;
export const ShinyText = ({
  children,
  className,
  shineColor = 'from-transparent via-white/80 to-transparent',
}: ShinyTextProps) => {
  return (
    <MotionSpan
      className={cn('relative inline-flex overflow-hidden align-middle md:text-5xl lg:text-7xl font-bold', className)}
    >
      {children}
      <span
        className={cn(
          'pointer-events-none absolute inset-0 text-transparent transition-all duration-300',
          `bg-gradient-to-r ${shineColor}`,
          'animate-shiny-text',
        )}
      />
    </MotionSpan>
  );
};
