'use client';
import type { NextPage } from "next";
import LicenseContainer from "./components/MineLicenseContainer";
import FrameComponent from "./components/MineFrameComponent";
import styles from "../styles/mine.module.css";
import MineTabs from "./components/MineTabs";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import DailyCombo from "./components/DailyCombo";
import TapComponent from "../components/TapComponent";
import Points from "../components/Points";

const Mine: NextPage = () => {
  
  return (
    <div className={styles.minemain}>
      {/* <img className={styles.unionIcon} alt="" src="/union.svg" /> */}
      <Header />
      <div className={styles.minec}>
        <DailyCombo />
        <div className={styles.mined}>
          <Points points={459000} />
          <LicenseContainer />
          <MineTabs />
          <TapComponent />
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Mine;
