import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  distance = 60,
  direction = 'vertical',
  reverse = false,
  duration = 0.9,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.15,
  delay = 0,
  className = '',
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const x = direction === 'horizontal' ? (reverse ? -distance : distance) : 0;
    const y = direction === 'vertical' ? (reverse ? -distance : distance) : 0;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          x,
          y,
          opacity: animateOpacity ? initialOpacity : 1,
          scale: scale !== 1 ? scale : 1,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: el,
            start: `top+=${threshold * 100}% bottom`,
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, elRef);

    return () => ctx.revert();
  }, [distance, direction, reverse, duration, ease, initialOpacity, animateOpacity, scale, threshold, delay]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedContent;
