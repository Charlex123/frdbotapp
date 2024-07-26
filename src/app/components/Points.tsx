import type { NextPage } from "next";

import styles from "../styles/points.module.css";

export type PointsType = {
  className?: string;
  points?: number;
};

const Points: NextPage<PointsType> = ({ className = "", points }) => {
  

  return (
    <>
      <div className={[styles.points, className].join(" ")}>
        <div className={styles.levelProgress}>
          <div className={styles.wrapperGroup9Parent}>
            <div className={styles.wrapperGroup9}>
              <img
                className={styles.wrapperGroup9Child}
                loading="lazy"
                alt=""
                src="/group-9-2.svg"
              />
            </div>
            <b className={styles.levelValue}>{points!.toLocaleString()}</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Points;
