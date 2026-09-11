import React, { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ value, duration = 2000, className = '' }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);

  // Parse raw value string e.g. "25+", "4.7", "5"
  const parseValue = (valStr) => {
    const isDecimal = valStr.includes('.');
    const suffix = valStr.replace(/[0-9.]/g, '');
    const num = parseFloat(valStr.replace(/[^0-9.]/g, '')) || 0;
    return { num, suffix, isDecimal };
  };

  useEffect(() => {
    let animFrameId = null;

    const animateCount = () => {
      const { num, suffix, isDecimal } = parseValue(value);
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentNum = num * easeProgress;

        if (isDecimal) {
          setDisplayValue(currentNum.toFixed(1) + suffix);
        } else {
          setDisplayValue(Math.floor(currentNum) + suffix);
        }

        if (progress < 1) {
          animFrameId = requestAnimationFrame(updateCount);
        } else {
          setDisplayValue(value);
        }
      };

      animFrameId = requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount();
        } else {
          if (animFrameId) cancelAnimationFrame(animFrameId);
          setDisplayValue('0');
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

export default AnimatedCounter;
