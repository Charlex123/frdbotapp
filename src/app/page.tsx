'use client'
import React, { useState, useEffect } from 'react';
import type { NextPage } from "next";
import { useAppUser } from './provider';
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import Points from "./components/Points";
import Footer from "./components/Footer";
import styles from "./styles/index.module.css";
import Loading from './components/Loading'; 
import "./styles/global.css";
import TapComponent from "./components/TapComponent";

const Home: NextPage = () => {
  const { appuser, loading } = useAppUser();
  const [totalPoints, setTotalPoints] = useState<number>(0);
  
  useEffect(() => {
    if (appuser) {
      setTotalPoints(appuser.totalpoints);
    }
  }, [appuser]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.main}>
        <Header />
        <div className={styles.mainc}>
          <TopNav />
          {appuser ? <Points points={totalPoints} /> : <p>No user data available</p>}
          <TapComponent totalPoints={totalPoints} setTotalPoints={setTotalPoints} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
