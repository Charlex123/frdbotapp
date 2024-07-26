'use client';
import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/tapcomponent.module.css";
import Boost from "@/app/components/Boost";
import { useAppUser, useTelegram } from "../provider";
import AnimatedText from "./AnimatedText";

const TapComponent: NextPage = () => {
  const [animations, setAnimations] = useState<{ id: number; x: number; y: number; number: number }[]>([]);
  const [bounce, setBounce] = useState<boolean>(false);
  const { appuser, fetchAndUpdateUser } = useAppUser();
  const { user } = useTelegram();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  const handleImageClick = async (e: React.MouseEvent<HTMLImageElement>) => {
    if (!user) {
      console.error('User not found');
      return;
    }

    // const chat_id = user.id;
    const chat_id = 730149343;
    const imgRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - imgRect.left;
    const y = e.clientY - imgRect.top;
    const id = Date.now();
    const number = appuser!.multiplier; // Set the exact number to be displayed

    setAnimations((prev) => [
      ...prev,
      { id, x, y, number }
    ]);

    try {
      const response = await fetch(`${apiUrl}/api/users/${chat_id}/gettotalpoints`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("res data",response, data)
      const newTotalPoints = data.totalpoints + number;

      await fetch(`${apiUrl}/api/users/${chat_id}/updatetotalpoints`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalpoints: newTotalPoints }),
      });

      // Refresh context here
      await fetchAndUpdateUser(730149343);
    } catch (error) {
      console.error('Failed to update total points:', error);
    }

    // Trigger the combined bounce animation
    setBounce(true);
    setTimeout(() => setBounce(false), 1000); // Remove the class after the animation duration
  };

  const handleAnimationEnd = (id: number) => {
    setAnimations((prev) => prev.filter((anim) => anim.id !== id));
  };

  return (
    <div className={styles.tap}>
      <div className={styles.tapc}>
        <img
          className={`${styles.tapimage} ${bounce ? styles['bounce-all-sides'] : ''}`}
          alt=""
          src="/ballwhite.png"
          onClick={handleImageClick}
          style={{ cursor: 'pointer', outline: 'none' }}
        />
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
      <Boost dailypoints={appuser!.dailypoints} />
    </div>
  );
};

export default TapComponent;
