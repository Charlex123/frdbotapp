'use client';
import type { NextPage } from "next";
import LicenseContainer from "./components/MineLicenseContainer";
import FrameComponent from "./components/MineFrameComponent";
import styles from "../styles/mine.module.css";
import MineTabs from "./components/MineTabs";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import DailyCombo from "./components/DailyCombo";
import TapComponent from "./components/TapComponent";
import LevelInfo from "../components/LevelInfo";

const Mine: NextPage = () => {
  
  return (
    <div className={styles.minemain}>
      {/* <img className={styles.unionIcon} alt="" src="/union.svg" /> */}
      <Header />
      <div className={styles.profitProgress}>
        <DailyCombo />
        <div className={styles.profitProgressChild} />
        <div className={styles.licenseContainerParent}>
          <LevelInfo />
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
