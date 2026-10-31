'use client';

import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;
    }

    const parallaxItems = document.querySelectorAll<HTMLElement>('[data-parallax-speed]');
    let isScheduled = false;

    function renderParallax() {
      const windowHeight = window.innerHeight;

      parallaxItems.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0');
        const rect = el.getBoundingClientRect();

        if (rect.bottom >= -150 && rect.top <= windowHeight + 150) {
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const delta = elementCenter - viewportCenter;
          const translateY = (delta * speed).toFixed(2);

          el.style.transform = `translate3d(0, ${translateY}px, 0)`;
        }
      });

      isScheduled = false;
    }

    function onScroll() {
      if (!isScheduled) {
        window.requestAnimationFrame(renderParallax);
        isScheduled = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    renderParallax();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
