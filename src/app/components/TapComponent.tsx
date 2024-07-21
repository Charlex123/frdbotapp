'use client';
import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/tapcomponent.module.css";
import Boost from "@/app/components/Boost";
import AnimatedText from "./AnimatedText";


const TapComponent: NextPage = () => {
  const [animations, setAnimations] = useState<{ id: number; x: number; y: number; number: number }[]>([]);
  const [sum, setSum] = useState<number>(0);
  const [number_, setNumber_] = useState<number>(4) 
  const [bounce, setBounce] = useState<boolean>(false);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const imgRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - imgRect.left;
    const y = e.clientY - imgRect.top;
    const id = Date.now();
    const number = number_; // Set the exact number to be displayed

    setAnimations((prev) => [
      ...prev,
      { id, x, y, number }
    ]);
    setSum((prevSum) => {
      const newSum = prevSum + number;
      // sendSumToDatabase(newSum);
      console.log('summm',sum)
      return newSum;
    });

    // Trigger the combined bounce animation
    setBounce(true);
    setTimeout(() => setBounce(false), 1000); // Remove the class after the animation duration
  };

  const handleAnimationEnd = (id: number) => {
    setAnimations((prev) => prev.filter((anim) => anim.id !== id));
  };

  // const sendSumToDatabase = async (newSum: number) => {
  //   try {
  //     const response = await fetch('/api/saveSum', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ sum: newSum }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //   } catch (error) {
  //     console.error('Failed to send sum to database:', error);
  //   }
  // };

  return (
    <div className={styles.tap}>
      {/* <img className={styles.unionIcon} alt="" src="/union.svg" /> */}
        <div className={styles.tapc}>
            <img className={`${styles.tapimage} ${bounce ? styles['bounce-all-sides'] : ''}`} alt="" src="/ballwhite.png"  onClick={handleImageClick}
        style={{ cursor: 'pointer', outline: 'none' }}/>
        {animations.map(({ id, x, y, number }) => (
          <AnimatedText
            key={id}
            x={x}
            y={y}
            number={number}
            onAnimationEnd={() => handleAnimationEnd(id)}
          />
        ))}
        </div>
        <Boost />
    </div>
  );
};

export default TapComponent;
