import type { NextPage } from "next";
import LevelInfo from "@/app/components/LevelInfo";
import styles from "../../styles/dailycombo.module.css";

export type DailyComboType = {
  className?: string;
};

const DailyCombo: NextPage<DailyComboType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.dailyCombomain, className].join(" ")}>

      <div className={styles.rectangleParent}>

      <div className={styles.dailyComboWrapper}>
        <div className={styles.dailyCombo}>Daily combo</div>
        <div className={styles.dailyComboProgress}>
          <img
            className={styles.dailyComboProgressChild}
            alt=""
            src="/group-9-3.svg"
          />
          <div className={styles.container}>
            <div className={styles.div1}>+5,000,000</div>
          </div>
          <img
            className={styles.dailyComboProgressItem}
            alt=""
            src="/group-17.svg"
          />
        </div>
      </div>

      </div>
    </div>
  );
};

export default DailyCombo;
