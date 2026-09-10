import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

const BlurText = ({
  text = '',
  delay = 140,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOut',
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-30px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,30px,0)' };

  const defaultTo = [
    {
      filter: 'blur(4px)',
      opacity: 0.6,
      transform: direction === 'top' ? 'translate3d(0,4px,0)' : 'translate3d(0,-4px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  // Split by newline to preserve line breaks if present
  const lines = text.split('\n');

  let globalIndex = 0;

  return (
    <h1 ref={ref} className={className}>
      {lines.map((line, lineIdx) => {
        const elements = animateBy === 'words' ? line.split(' ') : line.split('');

        return (
          <span key={lineIdx} className="block">
            {elements.map((element, idx) => {
              const currentIndex = globalIndex++;
              return (
                <motion.span
                  key={idx}
                  initial={animationFrom || defaultFrom}
                  animate={inView ? animationTo || defaultTo : animationFrom || defaultFrom}
                  transition={{
                    duration: stepDuration,
                    delay: (currentIndex * delay) / 1000,
                    ease: easing,
                  }}
                  onAnimationComplete={
                    currentIndex === text.length - 1 ? onAnimationComplete : undefined
                  }
                  className="inline-block will-change-[transform,filter,opacity]"
                >
                  {element === ' ' ? '\u00A0' : element}
                  {animateBy === 'words' && idx < elements.length - 1 && '\u00A0'}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
};

export default BlurText;
