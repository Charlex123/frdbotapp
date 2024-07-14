import React from 'react';
import styles from '../styles/popup.module.css';

interface ImageWithRaysProps {
  src: string;
  alt: string;
}

const PopUp: React.FC<ImageWithRaysProps> = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.rays}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.ray}></div>
        ))}
      </div>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default PopUp;
