'use client';
import React, { useState, useEffect } from 'react';
import type { NextPage } from "next";
import LicenseContainer from "./components/MineLicenseContainer";
import FrameComponent from "./components/MineFrameComponent";
import styles from "../styles/mine.module.css";
import MineTabs from "./components/MineTabs";
import { useAppUser } from "../provider";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import DailyCombo from "./components/DailyCombo";
import TapComponent from "../components/TapComponent";
import Points from "../components/Points";

const Mine: NextPage = () => {
  const { appuser, loading } = useAppUser();
  const [totalPoints, setTotalPoints] = useState<number>(0);

  useEffect(() => {
    if (appuser) {
      setTotalPoints(appuser.totalpoints);
    }
  }, [appuser]);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className={styles.minemain}>
      {/* <img className={styles.unionIcon} alt="" src="/union.svg" /> */}
      <Header />
      <div className={styles.minec}>
        <DailyCombo />
        <div className={styles.mined}>
          {appuser ? <Points points={appuser.totalpoints} /> : <p>No user data available</p>}
          <LicenseContainer />
          <MineTabs />
          <TapComponent totalPoints={totalPoints} setTotalPoints={setTotalPoints} />
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Mine;
