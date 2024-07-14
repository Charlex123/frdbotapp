import React from 'react';
import styles from '../styles/imagewithrays.module.css';

interface ImageWithRaysProps {
  src: string;
  alt: string;
}

const ImageWithRays: React.FC<ImageWithRaysProps> = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.spirals}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={`${styles.spiral} ${styles[`spiral${i + 1}`]}`}></div>
        ))}
      </div>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default ImageWithRays;
