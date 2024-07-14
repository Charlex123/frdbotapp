import type { NextPage } from "next";
import styles from "../styles/topnav.module.css";

export type TopNavType = {
  className?: string;
};

const TopNav: NextPage<TopNavType> = ({ className = "" }) => {
  return (
    <nav className={[styles.profitTitleParent, className].join(" ")}>
      <div className={styles.profitTitle}>
        <div className={styles.earnPerTap}>Earn per tap</div>
        <div className={styles.profitAmount}>
          <img className={styles.profitAmountChild} alt="" src="/group-9.svg" />
          <div className={styles.profitSymbol}>+12</div>
        </div>
      </div>
      <div className={styles.profitTitle}>
        <div className={styles.coinsToLevel}>Coins to level up</div>
        <div className={styles.mWrapper}>
          <div className={styles.m}>10 M</div>
        </div>
      </div>
      <div className={styles.profitTitle}>
        <div className={styles.profitPerHour}>Profit per hour</div>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src="/group-9-1.svg" />
          <div className={styles.k}>+636.31K</div>
          <img className={styles.profitIcon} alt="" src="/profit-icon.svg" />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
