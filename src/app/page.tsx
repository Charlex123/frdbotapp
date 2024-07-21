'use client'
import React, { useState } from 'react';
import type { NextPage } from "next";
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import Points from "./components/Points";
import Footer from "./components/Footer";
import styles from "./styles/index.module.css";
import "./styles/global.css";
import TapComponent from "./components/TapComponent";

const Home: NextPage = () => {

  

  return (
    <>
      <div className={styles.main}>
        <Header />
        <div className={styles.mainc}>
            <TopNav />
            <Points points={567000}/>
            <TapComponent />
          <Footer />
        </div>
      </div>
      
    </>
  );
};

export default Home;
