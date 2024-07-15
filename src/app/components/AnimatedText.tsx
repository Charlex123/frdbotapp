// components/AnimatedText.tsx
import React, { useEffect } from 'react';
import styles from '../styles/animatedtext.module.css';

interface AnimatedTextProps {
  x: number;
  y: number;
  number: number;
  onAnimationEnd: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ x, y, number, onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 3000); // Animation duration

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className={styles.animatedText} style={{ top: y, left: x }}>
      +{number}
    </div>
  );
};

export default AnimatedText;
