'use client';
import React from 'react';
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from "../styles/tapcomponent.module.css";
import Boost from "@/app/components/Boost";
import { useTelegram } from "../provider";
import { useAppUser } from "../provider";
import AnimatedText from "./AnimatedText";

interface TapComponentProps {
  totalPoints: number;
  setTotalPoints: React.Dispatch<React.SetStateAction<number>>;
}

const TapComponent: NextPage<TapComponentProps> = ({ totalPoints, setTotalPoints }) => {
  const [animations, setAnimations] = useState<{ id: number; x: number; y: number; number: number }[]>([]);
  const [bounce, setBounce] = useState<boolean>(false);
  const { user } = useTelegram();
  const [dailyPointsCounter, setDailyPointsCounter] = useState<number>(0);
  const { appuser, fetchAndUpdateUser } = useAppUser();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (appuser) {
      setTotalPoints(appuser.totalpoints);
      setDailyPointsCounter(appuser.dailypointscounter);
    }
  }, [appuser]);

  const handleImageClick = async (e: React.MouseEvent<HTMLImageElement>) => {
    if (!user) {
      console.error('User not found');
      return;
    }

    const chat_id = user.id;
    // const chat_id = 730149343;
    const imgRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - imgRect.left;
    const y = e.clientY - imgRect.top;
    const id = Date.now();
    const number = appuser!.multiplier; // Set the exact number to be displayed

    setAnimations((prev) => [
      ...prev,
      { id, x, y, number }
    ]);

     // Optimistically update total points and daily points counter
    const optimisticTotalPoints = totalPoints + number;
    let newDailyPointsCounter = dailyPointsCounter - number;
    if (newDailyPointsCounter <= 0) {
      newDailyPointsCounter = appuser!.dailypoints;
    }
    setTotalPoints(optimisticTotalPoints);
    setDailyPointsCounter(newDailyPointsCounter);

    // Update total points on the backend
    try {
      const response0 = await fetch(`${apiUrl}/api/users/${chat_id}/gettotalpoints`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response0.ok) {
        throw new Error('Network response was not ok');
      }

      const datatp = await response0.json();
      const newTotalPoints = datatp.totalpoints + number;

      await fetch(`${apiUrl}/api/users/${chat_id}/updatetotalpoints`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalpoints: newTotalPoints }),
      });

      const response1 = await fetch(`${apiUrl}/api/users/${chat_id}/getdailypointscounter`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response1.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response1.json();
      const newdailypointscounter = data.dailypointscounter - number;

      await fetch(`${apiUrl}/api/users/${chat_id}/updatedailypointscounter`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dailypointscounter: newdailypointscounter }),
      });

      // Refresh context here
      await fetchAndUpdateUser(chat_id);
    } catch (error) {
      // Revert the optimistic update if the request fails
      setTotalPoints(totalPoints - number);
      setDailyPointsCounter(dailyPointsCounter + number);
      console.error('Failed to update total points:', error);
    }

    // Trigger the combined bounce animation
    setBounce(true);
    setTimeout(() => setBounce(false), 100); // Remove the class after the animation duration
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
      {appuser ? <Boost dailypoints={appuser.dailypoints} dailypointscounter={dailyPointsCounter} /> : ''}
    </div>
  );
};

export default TapComponent;
