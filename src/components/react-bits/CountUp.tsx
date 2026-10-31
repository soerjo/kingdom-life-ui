'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  start?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export const CountUp = ({
  end,
  duration = 2,
  delay = 0,
  start = 0,
  suffix = '',
  prefix = '',
  decimals = 0,
  className,
}: CountUpProps) => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let startTime: DOMHighResTimeStamp;
    const dur = duration > 0 ? duration : 1;
    const animate = (currentTime: DOMHighResTimeStamp) => {
      startTime = startTime || currentTime;
      const progress = (currentTime - startTime) / (dur * 1000);

      if (progress < 1) {
        const easedProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        const currentValue = start + easedProgress * (end - start);
        setCount(currentValue);
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [end, duration, delay, start, isInView]);

  const formattedCount = count.toFixed(decimals);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </motion.span>
  );
};
