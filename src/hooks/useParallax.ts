'use client';

import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxOptions<T extends HTMLElement = HTMLElement> {
  speed?: number;
  ref?: React.RefObject<T | null>;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options?: ParallaxOptions<T>,
): {
  ref: React.RefObject<T | null>;
  y: MotionValue<string>;
} {
  const internalRef = useRef<T | null>(null);
  const targetRef = options?.ref ?? internalRef;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const speed = options?.speed ?? 0.2;
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -50}vh`, `${speed * 50}vh`]);

  return { ref: targetRef, y };
}
