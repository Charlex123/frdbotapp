'use client';
import type { NextPage } from "next";
import styles from "../../styles/tabcomponent.module.css";
import Boost from "@/app/components/Boost";

const TapComponent: NextPage = () => {
  
  return (
    <div className={styles.gameinfo}>
      {/* <img className={styles.unionIcon} alt="" src="/union.svg" /> */}
        <div className={styles.levelUp}>
            <img className={styles.levelUpChild} alt="" src="/group-10.svg" />
        </div>
        <Boost />
    </div>
  );
};

export default TapComponent;
