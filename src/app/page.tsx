'use client'
import React from 'react';
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
  const { appuser } = useAppUser();
  

  return (
    <>
      <div className={styles.main}>
        <Header />
        <div className={styles.mainc}>
            <TopNav />
            {appuser ? <Points points={appuser!.points}/> : <Loading/>}
            <TapComponent />
          <Footer />
        </div>
      </div>
      
    </>
  );
};

export default Home;
