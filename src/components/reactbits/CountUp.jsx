import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  decimals = 0,
  onStart,
  onEnd,
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  // Set initial text
  useEffect(() => {
    if (ref.current) {
      const initialNum = direction === 'down' ? to : from;
      ref.current.textContent = formatNumber(initialNum, decimals, separator);
    }
  }, [from, to, direction, decimals, separator]);

  // Start animation when in view
  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(() => {
        if (typeof onEnd === 'function') {
          onEnd();
        }
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = formatNumber(latest, decimals, separator);
      }
    });

    return () => unsubscribe();
  }, [springValue, decimals, separator]);

  return <span className={className} ref={ref} />;
}

function formatNumber(value, decimals, separator) {
  const fixed = Number(value).toFixed(decimals);
  if (!separator) return fixed;

  const [intPart, decPart] = fixed.split('.');
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return decPart ? `${formattedInt}.${decPart}` : formattedInt;
}
