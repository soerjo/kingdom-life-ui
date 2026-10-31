'use client';

import React, { useRef, useState, MouseEvent, ReactNode } from 'react';
import { cn } from '@/utils';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string; // Tailwind color class, e.g., 'from-blue-500'
}

export const SpotlightCard = ({ children, className, spotlightColor = 'from-primary/80' }: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        'relative overflow-hidden rounded-xl bg-card p-6 shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-4',
        className,
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300',
          `bg-gradient-radial ${spotlightColor} via-transparent to-transparent`,
        )}
        style={{
          opacity,
          backgroundPosition: `${position.x}% ${position.y}%`,
          backgroundSize: '200% 200%',
        }}
      />
      {children}
    </div>
  );
};
